import { POSTS_URL } from './urls';
import { APIData, ResponseObject } from '../interfaces';
import { Post } from '../interfaces/services';

const fetchData = (
  URL: URL,
  options?: RequestInit
): Promise<ResponseObject> => {
  return fetch(URL, options)
    .then((res: Response): Promise<APIData> | never => {
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return res.json();
    })
    .then((data): ResponseObject => {
      return {
        isOk: true,
        data,
      };
    })
    .catch((err: Error): ResponseObject => {
      return { isOk: false, text: err.message };
    });
};

export const getPosts = async () => {
  return await fetchData(POSTS_URL);
};

export const getPost = async (blogId: string) => {
  const POST_URL = new URL(POSTS_URL);
  POST_URL.searchParams.set('id', blogId);
  return await fetchData(POST_URL);
};

export const addPost = async (newPost: Post) => {
  const OPTIONS = {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: { 'Content-Type': 'application/json' },
  };

  return await fetchData(POSTS_URL, OPTIONS);
};
