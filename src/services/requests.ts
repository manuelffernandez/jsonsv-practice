import { BLOGS_URL } from './urls';
import { APIData, ResponseObject } from '../interfaces';
import { Blog } from '../interfaces/services';

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

export const getBlogs = async () => {
  return await fetchData(BLOGS_URL);
};

export const getBlog = async (blogId: string) => {
  const BLOG_URL = new URL(BLOGS_URL);
  BLOG_URL.searchParams.set('id', blogId);
  return await fetchData(BLOG_URL);
};

export const addBlog = async (newBlog: Blog) => {
  const OPTIONS = {
    method: 'POST',
    body: JSON.stringify(newBlog),
    headers: { 'Content-Type': 'application/json' },
  };

  return await fetchData(BLOGS_URL, OPTIONS);
};
