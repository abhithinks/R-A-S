import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { ApiService } from './shared/api.service';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/daygrid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // a plugin!
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivityComponent } from './activity/activity.component';
import { MatInputModule } from '@angular/material/input';
import { DesignutilityService } from './holiday/designutility.service';
import { NavbarComponent } from './navbar/navbar.component';
import { DefaultModule } from './layouts/default/default.module';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './modules/update/update.component';
import { ManagerdetailComponent } from './modules/managerdetail/managerdetail.component';
import { MatDividerModule } from '@angular/material/divider';






FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    EmployeeDashComponent,
    ApplyleaveComponent,
    ActivityComponent,
    NavbarComponent,
    AboutComponent,
    ProfileComponent,
    UpdateComponent,
    ManagerdetailComponent,
    
    
    
   
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    DefaultModule,
    MatDividerModule
  
  ],
  providers: [ApiService, DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
