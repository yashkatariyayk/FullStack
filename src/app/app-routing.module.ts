import { EditdetailComponent } from './editdetail/editdetail.component';
import { GetdetailComponent } from './getdetail/getdetail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [{
  path: 'user/create',
  component: RegisterComponent
},
{
  path: 'edit/:id',
  component: EditdetailComponent
},
{
  path: 'user',
  component:GetdetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
