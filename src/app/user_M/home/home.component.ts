import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/interfaces/book";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  allBooks: Book[] = [];
  selectedCategories: string[];
  filteredBooks: Book[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllBooks().subscribe(data => {
      this.allBooks = data;
      this.filteredBooks = this.allBooks;
    });

    this.userService.filterByGenre.subscribe((data: string[]) => {
      this.selectedCategories = data;
      console.log(this.selectedCategories);
    });
  }
}
