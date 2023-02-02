export interface APIPost {
  id: number;
  title: string;
  body: string;
  likes: number;
}

export type APIData = Array<APIPost>;

export interface ResponseObject {
  isOk: boolean;
  text?: string;
  data?: APIData;
}
