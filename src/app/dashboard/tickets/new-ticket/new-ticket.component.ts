import { AfterViewInit, Component, ElementRef, EventEmitter, output, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // @Output() add = new EventEmitter();
  add = output< {Title: string; Text: string} >();

  ngAfterViewInit() {
      console.log('AFTER VIEW INIT');
      console.log(this.form().nativeElement);
  }

  onSubmit(title: string, text: string) {
    console.log(title);
    console.log(text);
    this.form().nativeElement.reset();
    this.add.emit({Title: title, Text: text});
  }
}
