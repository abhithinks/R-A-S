import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActivityComponent } from './activity/activity.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ListComponent } from './modules/list/list.component';
import { ManagerdetailComponent } from './modules/managerdetail/managerdetail.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UpdateComponent } from './modules/update/update.component';
import { ProfileComponent } from './profile/profile.component';

import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'' , component: LoginComponent
  },
  {
    path:'login' , component: LoginComponent
  },
 
  {
    path:'about' , component: AboutComponent
  },
  {
    path:'signup' , component: SignupComponent
  },
  {
    path:'profile' , component: ProfileComponent
  },
 
  {
    path:'applyLeave' , component: ApplyleaveComponent
  },
  {
    path:'employeeDash' , component: EmployeeDashComponent
  },
  {
    path:'activity' , component: ActivityComponent
  },
  {
    path:'admin' , component: DefaultComponent,
    children: [
      {path: 'dashboard', component:DashboardComponent},
      {path: 'posts', component:PostsComponent},
      {path: 'list', component:ListComponent},
       {path:'update' , component: UpdateComponent},
       {path:'managerDetails' , component: ManagerdetailComponent}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
