import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHostDirective } from './profile-host.directive';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: AppComponent}
]

@NgModule({
  declarations: [ProfileHostDirective, ProfileComponent, AppComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DynamicLoadingModule { }
