import { POSTS_URL } from './urls';
import { APIData, ResponseObject } from '../interfaces';

const errorHandler = (err: Error): ResponseObject => {
  return { isOk: false, text: err.message };
};

const fetchData = (URL: URL): Promise<ResponseObject> => {
  return fetch(URL)
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

export const getPosts = async () => {
  return await fetchData(POSTS_URL);
};

export const getPost = async (blogId: string) => {
  const POST_URL = new URL(POSTS_URL);
  POST_URL.searchParams.set('id', blogId);
  return await fetchData(POST_URL);
};
