import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes = [
  {path: '', component: HomeComponent},
  {path: 'encapsulation', loadChildren: () => import('./encapsulation/encapsulation.module').then(mod => mod.EncapsulationModule)},
  {path: 'dynamicLoading', loadChildren: () => import('./dynamic-loading/dynamic-loading.module').then(mod => mod.DynamicLoadingModule)},
  {path: 'templates', loadChildren: () => import('./template/template.module').then(mod => mod.TemplateModule)},
  {path: 'operators', loadChildren: () => import('./operators/operators.module').then(mod => mod.OperatorsModule)},
  {path: 'directives', loadChildren: () => import('./directives/directives.module').then(mod => mod.DirectiveModule)}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
