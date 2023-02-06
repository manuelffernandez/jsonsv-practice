export interface Post {
  title: string;
  body: string;
  likes: number;
}

export interface APIPost extends Post {
  id: number;
}

export type APIData = Array<APIPost>;

export interface ResponseObject {
  isOk: boolean;
  text?: string;
  data?: APIData;
}
