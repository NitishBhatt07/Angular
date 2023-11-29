import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleComponent } from './console/console.component';
import { UserformComponent } from './userform/userform.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component'
import { AppRoutingModule } from '../app-routing.module';
import { NoPageComponent } from './no-page/no-page.component';


@NgModule({
  declarations: [
    ConsoleComponent,
    UserformComponent,
    HeaderComponent,
    NoPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    UserformComponent,
    ConsoleComponent,
    HeaderComponent,
  ]
})
export class UserModuleModule { }
