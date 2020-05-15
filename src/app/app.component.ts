import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  persons = ["Max", "Manual", "Tanvir"];
  onPersonCreated(name: string) {
    this.persons.push(name);
  }
}
