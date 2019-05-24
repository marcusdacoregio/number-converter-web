import { NgModule } from '@angular/core';

import { NumberConverterRoutingModule } from '@number-converter/number-converter-routing.module';
import { NumberConverterComponent } from '@number-converter/number-converter.component';
import { NumberConverterService } from '@number-converter/number-converter.service';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    NumberConverterComponent
  ],
  imports: [
    SharedModule,
    NumberConverterRoutingModule,
  ],
  providers: [
    NumberConverterService
  ]
})
export class NumberConverterModule { }
