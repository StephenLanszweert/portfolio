import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  activeSection: string;
  @Output() sectionClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {
    this.activeSection = "home";
  }

  goToSection(sectionName: string) {
    this.sectionClicked.emit(sectionName);
    this.activeSection = sectionName;
  }
}
