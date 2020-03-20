import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-enterscreen",
  templateUrl: "./enterscreen.component.html",
  styleUrls: ["./enterscreen.component.scss"]
})
export class EnterscreenComponent implements OnInit {
  openBool: boolean;
  constructor() {}

  ngOnInit() {
    this.openBool = false;
  }

  open() {
    this.openBool = true;
  }
}
