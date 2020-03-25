import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-skillbar",
  templateUrl: "./skillbar.component.html",
  styleUrls: ["./skillbar.component.scss"]
})
export class SkillbarComponent implements OnInit {
  @Input() text;
  @Input() percentage;
  @HostBinding("attr.style") percentage_value: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    console.log(this.percentage);
    this.percentage_value = this.sanitizer.bypassSecurityTrustStyle(
      `--percentage: ${this.percentage}%`
    );
  }
}
