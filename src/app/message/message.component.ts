import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div class="ui-message ui-messages-error ui-corner-all" *ngIf="temErro()">
      {{ texto }}
    </div>
  `,
  styles: [`
  .ui-messages-error {
    margin: 0;
    margin-top: 4px;
  }`]
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() texto: string;

  temErro(): boolean {
    return this.control.hasError(this.error)  && this.control.dirty;
  }

}
