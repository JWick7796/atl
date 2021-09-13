import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/interfaces/user";
import { Book } from "src/app/interfaces/book";
import { Router } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  display: boolean;
  user: User;
  books: Book[] = [];
  filteredBooks: Book[] = [];
  selectedCategories: string[] = [];

  _filterBooksBy = "";
  get filterBooksBy(): string {
    return this._filterBooksBy;
  }
  set filterBooksBy(value: string) {
    this._filterBooksBy = value;
    this.filteredBooks = this.filterBooksBy
      ? this.performFilter(this.filterBooksBy)
      : this.books;
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.display = true;
    this.userService.getUserById(2).subscribe(
      data => (this.user = data),
      error => null,
      () => {
        localStorage.setItem("user", JSON.stringify(this.user));
        console.log(this.user);
      }
    );

    this.userService.getAllBooks().subscribe(data => {
      this.books = data;
      this.filteredBooks = this.books;
    });
  }

  performFilter(filterBy: string): Book[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.books.filter(
      (book: Book) =>
        book.title.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        book.author.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  bookRedirect(id: number): void {
    this.router.navigate(["/user/userdashboard/bookdetail/", id]);
  }

  categoryFilterSelect(){
    this.userService._filterByGenre = this.selectedCategories;
  }
}
