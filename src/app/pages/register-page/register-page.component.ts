import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  accountForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.accountForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    console.log(this.accountForm.value);
  }
}
