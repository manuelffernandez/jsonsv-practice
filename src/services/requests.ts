import { BLOGS_URL } from './urls';
import { ResponseObject } from '../interfaces';
import { Blog, blogData, blogsData, postBlog } from '../interfaces/services';

export const getBlogs = async (): Promise<ResponseObject<blogsData>> => {
  return await fetch(BLOGS_URL)
    .then(async (res: Response): Promise<blogsData> | never => {
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      } else {
        console.log(res);
        const blogsQty = parseInt(res.headers.get('x-total-count') as string);
        return await res.json().then(blogs => {
          return {
            blogsQty,
            blogs,
          };
        });
      }
    })
    .then((data): ResponseObject<blogsData> => {
      return { ...data, isOk: true };
    })
    .catch((err: Error): ResponseObject<blogsData> => {
      return { isOk: false, text: err.message };
    });
};

export const getBlog = async (
  blogId: string
): Promise<ResponseObject<blogData>> => {
  const BLOG_URL = new URL(BLOGS_URL);
  BLOG_URL.searchParams.set('id', blogId);

  return await fetch(BLOG_URL)
    .then((res: Response): Promise<blogData> | never => {
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      } else {
        return res.json();
      }
    })
    .then((data): ResponseObject<blogData> => {
      return { ...data, isOk: true };
    })
    .catch((err: Error): ResponseObject<blogData> => {
      return { isOk: false, text: err.message };
    });
};

export const addBlog = async (
  newBlog: Blog
): Promise<ResponseObject<postBlog>> => {
  const OPTIONS = {
    method: 'POST',
    body: JSON.stringify(newBlog),
    headers: { 'Content-Type': 'application/json' },
  };

  return await fetch(BLOGS_URL, OPTIONS)
    .then((res: Response): Promise<postBlog> | never => {
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      } else {
        return res.json();
      }
    })
    .then((data): ResponseObject<postBlog> => {
      return { ...data, isOk: true };
    })
    .catch((err: Error): ResponseObject<postBlog> => {
      return { isOk: false, text: err.message };
    });
};
