import { BASE_URL } from './urls';
import { ResponseObject } from '../interfaces';
import { Blog, blogData, blogsData, postBlog } from '../interfaces';

export const getBlogs = async (
  pageNumber: number,
  blogsPerPage: number
): Promise<ResponseObject<blogsData>> => {
  const BLOGS_URL = new URL(BASE_URL);
  BLOGS_URL.searchParams.set('_page', pageNumber.toString());
  BLOGS_URL.searchParams.set('_limit', blogsPerPage.toString());

  return await fetch(BLOGS_URL)
    .then((res: Response): Promise<blogsData> | never => {
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      } else {
        const blogsQty = parseInt(res.headers.get('x-total-count') as string);
        return res.json().then(blogs => {
          return {
            blogsQty,
            blogs,
          };
        });
      }
    })
    .then((blogsData): ResponseObject<blogsData> => {
      return { ...blogsData, isOk: true };
    })
    .catch((err: Error): ResponseObject<blogsData> => {
      return { isOk: false, text: err.message };
    });
};

export const getBlog = async (
  blogId: string
): Promise<ResponseObject<blogData>> => {
  const BLOG_URL = new URL(BASE_URL);
  BLOG_URL.searchParams.set('id', blogId);

  return await fetch(BLOG_URL)
    .then((res: Response): Promise<blogData> | never => {
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      } else {
        return res.json().then(data => {
          return { blog: data };
        });
      }
    })
    .then((blogData): ResponseObject<blogData> => {
      return { ...blogData, isOk: true };
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

  return await fetch(BASE_URL, OPTIONS)
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
