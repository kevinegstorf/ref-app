import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
  title = "My App";
  collapsed = true;
}