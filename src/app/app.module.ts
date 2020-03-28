import { HeaderComponent } from "./components/header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EnterscreenComponent } from "./components/enterscreen/enterscreen.component";
import { RouterModule } from "@angular/router";
import { WebsiteComponent } from "./components/website/website.component";
import { HomeComponent } from "./components/home/home.component";
import { SkillbarComponent } from "./components/skillbar/skillbar.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { DividerComponent } from "./components/divider/divider.component";
import { ProjectComponent } from "./components/project/project.component";

const routes = [
  {
    path: "",
    component: EnterscreenComponent
  },
  {
    path: "website",
    component: WebsiteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EnterscreenComponent,
    WebsiteComponent,
    HomeComponent,
    SkillbarComponent,
    ProjectsComponent,
    DividerComponent,
    ProjectComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
