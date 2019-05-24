import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NumberConverterService } from '@number-converter/number-converter.service';
import { NumberType } from '@model/number-type.enum';
import { NumberConversion } from '@shared/model/number-conversion';

@Component({
  selector: 'app-number-converter',
  templateUrl: './number-converter.component.html',
  styleUrls: ['./number-converter.component.css']
})
export class NumberConverterComponent {

  form: FormGroup;

  numberTypes = Object.keys(NumberType);

  conversionResult: string = '';

  constructor(
    private numberConverterService: NumberConverterService,
    private _formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this._formBuilder.group({
      numberType: this._formBuilder.control(NumberType.DECIMAL, Validators.required),
      numberToConvert: this._formBuilder.control('', Validators.required)
    });
  }

  convert(): void {
    const numberConversion = this.getFormData();

    this.numberConverterService.convertToRomanNumeral(numberConversion)
        .subscribe(conversionResult => {
          this.conversionResult = conversionResult.result;
        }, error => {
          alert(error);
        });
  }

  private getFormData(): NumberConversion {
    return this.form.getRawValue();
  }

}
