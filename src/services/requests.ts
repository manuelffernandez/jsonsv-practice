import { POSTS_URL } from './resources';
import { APIData, ResponseObject } from '../interfaces';

const errorHandler = (err: Error): ResponseObject => {
  return { isOk: false, text: err.message };
};

export const getPosts = (): Promise<ResponseObject> => {
  return fetch(POSTS_URL)
    .then((res: Response): Promise<APIData> | never => {
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return res.json();
    })
    .then(data => {
      return {
        isOk: true,
        data,
      };
    })
    .catch(errorHandler);
};
