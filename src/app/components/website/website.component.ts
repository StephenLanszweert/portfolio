import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-website",
  templateUrl: "./website.component.html",
  styleUrls: ["./website.component.scss"]
})
export class WebsiteComponent implements OnInit {
  loaded: boolean;
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 1);
  }

  sectionClicked(sectionName) {
    this.router.navigate(["/website/", sectionName]);
  }
}
