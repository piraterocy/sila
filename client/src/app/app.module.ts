import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { AppState, InteralStateType, AppUtil } from './shared/services/app.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlowComponent } from './flow/flow.component';

// Application wide providers
const APP_PROVIDERS = [
  AppState, AppUtil
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    FlowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DatepickerModule
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
