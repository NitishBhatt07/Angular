import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './user-module/console/console.component';
import { UserformComponent } from './user-module/userform/userform.component';
import { NoPageComponent } from './user-module/no-page/no-page.component';

const routes: Routes = [
  {
    path:'',
    component:ConsoleComponent,
  },
  {
    path:"form",
    component: UserformComponent,
  },
  {
    path:"form/:action/:id",
    component: UserformComponent,
  },
  {
    path:"**",
    component: NoPageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
