import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"]
})
export class ProjectComponent implements OnInit {
  @Input() keyword: string;
  @Input() words: string[];
  @Input() imageSrc: string;

  constructor() {}

  ngOnInit() {
    this.imageSrc = `url('${this.imageSrc}')`;
  }
}
