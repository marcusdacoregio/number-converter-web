import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumberConverterComponent } from '@number-converter/number-converter.component';

const routes: Routes = [
  {
    path: '',
    component: NumberConverterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NumberConverterRoutingModule { }
