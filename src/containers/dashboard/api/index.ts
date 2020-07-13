import axios from 'axios';
import { ErrorHandler } from '@utils/error';

import { ColorsFromServerType } from './types';

export const fetchColors = async (token: string): Promise<{ colors: ColorsFromServerType }> => {
  try {
    const {
      data: { data }
    } = await axios.get('https://reqres.in/api/colors?delay=3', {
      headers: { authorization: `Bearer ${token}` }
    });
    return { colors: data };
  } catch (e) {
    throw new ErrorHandler(e);
  }
};
