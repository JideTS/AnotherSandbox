import { CommonModule } from '@angular/common';
import { Component,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sandbox-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  /**
   * What kind of button is it?
   */
  @Input() 
  kind!: 'primary' | 'secondary' | 'outline' | 'text';

    /**
   * What is the state of this button?
   */
    @Input() 
    state!: 'normal' | 'focused';

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size!: 'slim' | 'medium' | 'large';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';



  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return ['sandbox-button', `sandbox-button--${this.size}`, `sandbox-button--${this.kind}`, `sandbox-button--${this.state}`];
  }




}
