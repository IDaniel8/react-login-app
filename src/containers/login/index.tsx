import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '@store/combineReducers';

import { ROUTES } from '~/routes';
import { isValidToken } from '@utils/auth';
import { loginActionRequest } from './actions';
import LoginStyles from './login.module.scss';

const Login: React.SFC<unknown> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const isFetching = useSelector(({ auth }: RootState) => auth.isFetching);
  const errors = useSelector(({ auth }: RootState) => auth.error);

  React.useEffect(() => {
    if (isValidToken()) history.replace(ROUTES.DASHBOARD);
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (emailRef.current && emailRef.current.value) || '';
    const password = (passwordRef.current && passwordRef.current.value) || '';
    const { type } = await dispatch(loginActionRequest({ email, password }));
    if (type.includes('SUCCESS')) history.replace(ROUTES.DASHBOARD);
  };

  return (
    <div className={LoginStyles.container}>
      <div className={LoginStyles.form_container}>
        <form onSubmit={onSubmit}>
          <div className={LoginStyles.form_title}>Sign In</div>
          <div className={LoginStyles.form_field}>
            <label className={LoginStyles.form_field_label} htmlFor="email">
              Email
            </label>
            <input className={LoginStyles.form_field_input} ref={emailRef} id="email" type="text" />
          </div>
          <div className={LoginStyles.form_field}>
            <label className={LoginStyles.form_field_label} htmlFor="password">
              Password
            </label>
            <input className={LoginStyles.form_field_input} ref={passwordRef} id="password" type="password" />
          </div>
          <div>
            <button className={LoginStyles.form_submit_button} type="submit">
              {isFetching ? 'Login...' : 'Sign in'}
            </button>
          </div>
        </form>
        {!!errors.length && (
          <div className={LoginStyles.form_errors}>
            {errors.map((e) => (
              <div key={e}>{e}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
