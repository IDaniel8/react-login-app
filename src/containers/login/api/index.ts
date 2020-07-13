import { ErrorHandler } from '@utils/error';
import { setStorageToken, removeStorageToken } from '@utils/auth';
import { loginModel } from '../model';

import { UserFromServerType } from './types';

export const fetchUserLogin = async (/* token */): Promise<{ user: UserFromServerType }> => {
  try {
    const userFromServer: UserFromServerType = await new Promise((resolve) =>
      setTimeout(() => resolve({ firstname: 'Ali', lastname: 'Daniel', city: 'kansas', role: 'admin' }), 1000)
    );
    return { user: userFromServer };
  } catch (e) {
    throw new ErrorHandler(e);
  }
};

export const fetchLogin = async ({ email, password }: typeof loginModel): Promise<{ user: UserFromServerType }> => {
  try {
    let token: string, user;
    if (email === 'prueba@gmail.com' && password === '123') {
      token = await new Promise((resolve) => setTimeout(() => resolve('123456'), 1000));
      user = await fetchUserLogin(/* token */);
      setStorageToken(token, 20);
    } else {
      throw new Error('invalid email or password credentials');
    }
    return { ...user };
  } catch (e) {
    throw new ErrorHandler(e);
  }
};

export const logout = (): void => {
  removeStorageToken();
};
