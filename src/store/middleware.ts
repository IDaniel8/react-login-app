import { MiddlewareAPI, Dispatch, Action as AnyAction, Middleware } from 'redux';

interface Action<P = unknown> extends AnyAction {
  payload: P;
  request?: Promise<P>;
  callback?: () => void;
}

interface Options {
  request: string;
  success: string;
  error: string;
}

class RequestParamError extends Error {
  constructor(name: string) {
    super();
    this.name = 'RequestParamError';
    this.message = `Request param of ${name} action should be a promise!`;
  }
}

const resolveAction = <P>(action: Action<P>, response: P, options: Options, result: boolean): Action<P> => {
  const nextState = result ? options.success : options.error;
  const actionPrefix: string = action.type.replace(options.request, '');

  return {
    type: `${actionPrefix}${nextState}`,
    payload: response
  };
};

const reduxReqMiddleware = (): Middleware => {
  const options = {
    request: '_REQUEST',
    success: '_SUCCESS',
    error: '_ERROR'
  };

  const middleware = (store: MiddlewareAPI<Dispatch<AnyAction>>) => (next: Dispatch<AnyAction>) => (action: Action) => {
    const dispatch = store.dispatch;
    const { request, type, callback, ...rest } = action;

    if (callback) callback();
    if (request === undefined) return next(action);
    else if (!request.then) throw new RequestParamError(action.type);

    next({ type, ...rest });

    return request.then(
      (res) => dispatch(resolveAction(action, res, options, true)),
      (err) => dispatch(resolveAction(action, err, options, false))
    );
  };

  return middleware;
};

export { reduxReqMiddleware };
