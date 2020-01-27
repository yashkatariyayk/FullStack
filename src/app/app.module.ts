
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RegisterService} from './register.service';
import { GetdetailComponent } from './getdetail/getdetail.component';
import { EditdetailComponent } from './editdetail/editdetail.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    GetdetailComponent,
    EditdetailComponent
  ],
  imports: [
    BrowserModule,SlimLoadingBarModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
