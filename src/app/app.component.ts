import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lazyApp';

  user = {
    'username': 'Paul', 'password': 'Smith'

  };

  submitForm(form: NgForm) {
    debugger
  }
}
