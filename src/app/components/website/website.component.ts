import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-website",
  templateUrl: "./website.component.html",
  styleUrls: ["./website.component.scss"]
})
export class WebsiteComponent implements OnInit {
  loaded: boolean;
  @ViewChildren("section") sections: QueryList<ElementRef>;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 1);
  }

  sectionClicked(sectionName) {
    this.sections
      .toArray()
      .find(e => e.nativeElement.getAttribute("id") == sectionName)
      .nativeElement.scrollIntoView({ behavior: "smooth" });
  }
}
