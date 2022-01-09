import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { ManagerModule } from 'src/app/manager/manager.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ApiService } from 'src/app/shared/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { ListComponent } from 'src/app/modules/list/list.component';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ListComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ManagerModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule
  ],

  providers:[ApiService
    
  ],
  bootstrap: [AppComponent]
  
})
export class DefaultModule { }
