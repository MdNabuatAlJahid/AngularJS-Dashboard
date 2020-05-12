import { Component } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css'],
})
export class PersonInputComponent {
  enteredPersonName = '';
  onCreatPerson() {
    console.log('person created: ' + this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
