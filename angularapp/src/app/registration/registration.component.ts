import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  registrationSuccess: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid && this.passwordsMatch()) {
      // Perform registration logic here
      this.registrationSuccess = true;
    }
  }

  hasError(field: string, errorType: string) {
    const control = this.registrationForm.get(field);
    return control && control.hasError(errorType);
  }

  passwordsMatch() {
    const password = this.registrationForm.get('password').value;
    const confirmPassword = this.registrationForm.get('confirmPassword').value;
    return password === confirmPassword;
  }
}
