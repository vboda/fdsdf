import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { RouterModule } from '@angular/router';
import { ThirdCompComponent } from './third-comp/third-comp.component';

const routes = [
  {path: '', component: FirstCompComponent}
]

@NgModule({
  declarations: [FirstCompComponent, SecondCompComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[ThirdCompComponent]
})
export class EncapsulationModule { }
