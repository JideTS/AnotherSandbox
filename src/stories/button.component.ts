import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "sandbox-button",
  standalone: true,
  imports: [CommonModule],
  template: ` <button
  type="button"
  (click)="emitClickEvent()"
  (mouseenter)="emitMouseenterEvent()"
  (mouseleave)="emitMouseleaveEvent()"
  (focus)="emitFocusEvent()"
  [ngClass]="classes"
  [ngStyle]="{ 'background-color': backgroundColor }"
>
  <ng-container *ngIf="iconPosition === 'left'">
    <span *ngIf="icon" class="icon left-icon">{{ icon }}</span>
    <img *ngIf="iconUrl && iconPosition === 'left'" class="icon left-icon" [src]="iconUrl" alt="Icon" />
  </ng-container>
  {{ label }}
  <ng-container *ngIf="iconPosition === 'right'">
    <span *ngIf="icon" class="icon right-icon">{{ icon }}</span>
    <img *ngIf="iconUrl && iconPosition === 'right'" class="icon right-icon" [src]="iconUrl" alt="Icon" />
  </ng-container>

  <ng-container *ngIf="state === 'loading'">
  <img class="spinner-icon" src="./spinner.svg" alt="Loading Spinner" />
</ng-container>

</button>`,
  styleUrls: ["./button.css"],
})
export class ButtonComponent {
  /**
   * What is the variant of this button?
   */
  @Input()
  style!: "filled" | "outlined" | "text" | "elevated" | "tonal";

  /**
   * What is the state of this button?
   */
  @Input()
  state!: "enabled" | "hovered" | "focused" | "pressed" | "disabled" | "loading";

  /**
   * What background color to use?
   */
  @Input()
  backgroundColor?: string;

  /**
   * What is the size of the button?
   */
  @Input()
  size!: "slim" | "medium" | "large";

  /**
   * What is the label of the button
   *
   * @required
   */
  @Input()
  label = "Button";

    /**
   * What is the icon URL (optional)?
   */

  @Input() iconUrl?: string;

   /**
   * What is the icon position?
   */

  @Input() iconPosition: "left" | "right" | "none"  = "none";

   /**
   * What is the loading icon URL (optional)?
   */

  @Input() loadingIconUrl?: string;

  /**
   * Click handler
   */
  @Output()
  onClick = new EventEmitter<string>();

  /**
   * Mouse enter handler
   */
  @Output()
  onMouseenter = new EventEmitter<string>();

  /**
   * Mouse leave handler
   */
  @Output()
  onMouseleave = new EventEmitter<string>();

  /**
   * Focus handler
   */
  @Output()
  onFocus = new EventEmitter<string>();

  public get classes(): string[] {
    return [
      "sandbox-button",
      `sandbox-button--${this.size}`,
      `sandbox-button--${this.style}`,
      `sandbox-button--${this.state}`,
    ];
  }

  emitClickEvent() {
    this.onClick.emit("Button clicked");
  }

  emitMouseenterEvent() {
    this.onMouseenter.emit("Mouse enter");
  }

  emitMouseleaveEvent() {
    this.onMouseleave.emit("Mouse leave");
  }

  emitFocusEvent() {
    this.onFocus.emit("Focus");
  }
}
