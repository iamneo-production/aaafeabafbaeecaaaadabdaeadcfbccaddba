import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the registration form', () => {
    const compiled = fixture.nativeElement;
    const form = compiled.querySelector('form');
    expect(form).toBeTruthy();
  });

  it('should display all input fields', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input#firstName')).toBeTruthy();
    expect(compiled.querySelector('input#lastName')).toBeTruthy();
    expect(compiled.querySelector('input#email')).toBeTruthy();
    expect(compiled.querySelector('input#password')).toBeTruthy();
    expect(compiled.querySelector('input#confirmPassword')).toBeTruthy();
  });

  it('should display a submit button', () => {
    const compiled = fixture.nativeElement;
    const submitButton = compiled.querySelector('button[type="submit"]');
    expect(submitButton).toBeTruthy();
    expect(submitButton.textContent).toContain('Register');
  });

  it('should display a success message when registrationSuccess is true', () => {
    const compiled = fixture.nativeElement;
    component.registrationSuccess = true;
    fixture.detectChanges();
    const successMessage = compiled.querySelector('.success-message');
    expect(successMessage).toBeTruthy();
    expect(successMessage.textContent).toContain('Registration successful! Thank you for signing up.');
  });
});
