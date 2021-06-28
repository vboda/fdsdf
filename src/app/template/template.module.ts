import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';


const routes = [
  {path: '', component: AppComponent}
]
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TemplateModule { }
