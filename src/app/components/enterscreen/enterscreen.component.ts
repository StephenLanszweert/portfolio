import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-enterscreen",
  templateUrl: "./enterscreen.component.html",
  styleUrls: ["./enterscreen.component.scss"]
})
export class EnterscreenComponent implements OnInit {
  openBool: boolean;
  words: any[];
  wordIndex: number;
  word: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.wordIndex = 0;
    this.openBool = false;
    this.words = [
      {
        first: "Web",
        last: "developer",
        anim: "first"
      },
      {
        first: "Web",
        last: "designer",
        anim: "last"
      },
      {
        first: "Web",
        last: "enthousiast",
        anim: "last"
      },
      {
        first: "Fullstack",
        last: "developer",
        anim: "both"
      }
    ];
    this.word = this.words[0];
    setInterval(() => {
      this.changeWords();
    }, 2000);
  }

  changeWords() {
    this.wordIndex++;
    if (this.wordIndex >= this.words.length) {
      this.wordIndex = 0;
    }
    this.word = this.words[this.wordIndex];
  }

  open() {
    this.openBool = true;
    setTimeout(() => {
      this.router.navigate([`/website/home`]);
    }, 1000);
  }
}
