import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { DirectiveModule } from "../shared/directive/directive.module";

@Component({
    standalone: true,
    imports: [CommonModule, DirectiveModule],
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
  collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}