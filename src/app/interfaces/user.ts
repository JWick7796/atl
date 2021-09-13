import { BorrowedBook } from './borrowed-book';

export interface User {
  id: number;
  name: string;
  password: string;
  admin: boolean;
  issuedBooks: BorrowedBook[];
  borrowLimit: number;
  favouirateGenre: string[];
}
