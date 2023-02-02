import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[hinvEmailvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailvalidatorDirective,
      multi: true,
    },
  ],
})
export class EmailvalidatorDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value as string;
    if (value.includes('test')) {
      return {
        invalidEmail: true,
      };
    }
    return null;
  }
  constructor() {}
}
