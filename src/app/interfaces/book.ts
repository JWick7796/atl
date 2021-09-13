import { Review } from "./review";

export interface Book {
  id: number;
  title: string;
  isbn: number;
  author: string;
  description: string;
  noOfCopiesAvailable: number;
  genre: string;
  reviews: Review[];
  imageURL: string;
}
