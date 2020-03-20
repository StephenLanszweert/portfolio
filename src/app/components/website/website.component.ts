import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-website",
  templateUrl: "./website.component.html",
  styleUrls: ["./website.component.scss"]
})
export class WebsiteComponent implements OnInit {
  loaded: boolean;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 1);
  }
}
