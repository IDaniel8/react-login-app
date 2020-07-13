import { setDateTimeMinForward, getDateTimeMin } from '@utils/date';

export const setStorageToken = (token: string, minutes: number): void => {
  localStorage.setItem('credentials', JSON.stringify({ token, dateTime: setDateTimeMinForward(minutes) }));
};

export const getStorageToken = (): { token: string; dateTime: number } => {
  return (localStorage.getItem('credentials') && JSON.parse(localStorage.getItem('credentials'))) || null;
};

export const removeStorageToken = (): void => {
  return localStorage.removeItem('credentials');
};

export const isValidToken = (): boolean => {
  const storageToken = getStorageToken();
  return storageToken && getDateTimeMin() < storageToken.dateTime;
};
