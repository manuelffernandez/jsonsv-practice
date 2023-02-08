export interface Blog {
  title: string;
  body: string;
  likes: number;
}

export interface APIBlog extends Blog {
  id: number;
}

export type APIData = Array<APIBlog>;

export type ResponseObject =
  | { isOk: true; data: APIData }
  | { isOk: false; text: string };
