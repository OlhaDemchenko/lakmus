import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lakmus';
  savedValue = '';
  enteredValue = '';

  onSave(): void {
    this.savedValue = this.enteredValue;
  }
}
