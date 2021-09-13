import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Book } from "../interfaces/book";
import { HttpClient } from "@angular/common/http";
import { URL } from "../utility/url";
import { User } from "../interfaces/user";

@Injectable({
  providedIn: "root"
})
export class UserService {

  _filterByGenre: string[] = [];
  public get filterByGenre(): Observable<string[]> {
    return of(this._filterByGenre);
  }

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(URL.getAllBooks);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(URL.getBookById + id);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(URL.getUserById + id);
  }
}
