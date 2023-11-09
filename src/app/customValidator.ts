import { AbstractControl, ValidationErrors } from "@angular/forms";


export function onlyNumbers(control: AbstractControl): ValidationErrors | null {
    const valid = /^\d+$/.test(control.value);
    return valid ? null : { numeric: true };
}

export function onlyAlphabetical(control: AbstractControl): ValidationErrors | null {
    const valid = /^[a-zA-Z\s]*$/.test(control.value);
    return valid ? null : { alphabetical: true };
}