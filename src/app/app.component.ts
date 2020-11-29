import { Component, OnInit } from "@angular/core";
import { SampleService } from "./sample.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  books: any;
  constructor(public sample: SampleService) {}
  ngOnInit() {
    this.sample.getBooks().subscribe(data => {
      console.log(data.items)
      this.books = data.items;
    });
  }
}
