import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgToggleModule } from 'ng-toggle-button';
import { share } from 'rxjs';

@Component({
  selector: 'app-twowaybinding',
  standalone: true,
  imports: [FormsModule, NgToggleModule, ReactiveFormsModule],
  templateUrl: './twowaybinding.component.html',
  styleUrl: './twowaybinding.component.scss'
})
export class TwowaybindingComponent {
  age: number = 10;
  name = 'ng-toggle-button';
  config = {
    value: true,
    name: '',
    disabled: false,
    height: 25,
    width: 50,
    margin: 3,
    fontSize: 10,
    speed: 300,
    color: {
      checked: '#56C128',
      unchecked: '#dcdcdc',
    },
    switchColor: {
      checked: '#3366FF',
      unchecked: 'crimson',
    },
    labels: {
      unchecked: 'off',
      checked: 'on',
    },
    checkedLabel: '',
    uncheckedLabel: '',
    fontColor: {
      checked: '#fafafa',
      unchecked: '#ffffff',
    },
  };
  showEmoji = true;
  toggleValue = false;
  toggleValue2 = false;
  anotherValue = '';

  sharedValue = true;
  sharedValue1 = true;
  sharedValue2 = true;

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      show: new FormControl('', Validators.required),
    });
  }

  changeTheInputValue() {
    if (this.anotherValue === 'ok') {
      this.toggleValue = true;
      this.toggleValue2 = true;
    } else {
      this.toggleValue = false;
      this.toggleValue2 = false;
    }
  }
}
