import { Blog } from './';

export interface APIBlog extends Blog {
  id: number;
}

export interface blogsData {
  blogsQty: number;
  blogs: Array<APIBlog>;
}

export interface blogData {
  blog: Array<APIBlog>;
}

export interface postBlog {
  blogCreated: APIBlog;
}

type APIData = blogsData | blogData | postBlog;

export type ResponseObject<T extends APIData> =
  | ({ isOk: true } & T)
  | { isOk: false; text: string };
