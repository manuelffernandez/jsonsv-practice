export interface Post {
  title: string;
  body: string;
  likes: number;
}

export interface APIPost extends Post {
  id: number;
}

export type APIData = Array<APIPost>;

export type ResponseObject =
  | { isOk: true; data: APIData }
  | { isOk: false; text: string };
