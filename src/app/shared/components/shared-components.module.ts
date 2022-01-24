import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    NavBarComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    LoadingComponent
  ]
})
export class SharedComponentsModule { }
