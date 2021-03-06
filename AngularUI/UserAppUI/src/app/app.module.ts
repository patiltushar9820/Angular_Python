import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddEditUserComponent } from './user/add-edit-user/add-edit-user.component';
import { ShowDeleteUserComponent } from './user/show-delete-user/show-delete-user.component';

import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';

import { FormBuilder, FormControl, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

import {MatStep, MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Step1Component } from './user/add-edit-user/step1/step1.component';
import { Step2Component } from './user/add-edit-user/step2/step2.component';
import { Step3Component } from './user/add-edit-user/step3/step3.component';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddEditUserComponent,
    ShowDeleteUserComponent,
    Step1Component,
    Step2Component,
    Step3Component
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatStepperModule,
    MatTabsModule,
    MatFormFieldModule,
   MatIconModule,
    MatInputModule,
    MatDatepickerModule,
     MatNativeDateModule,
    MatProgressBarModule,
    MatPaginatorModule,
   
    
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
