import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarModule } from 'ng-cdbangular';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { CanhanComponent } from './pages/canhan/canhan.component';
import { ZingchartComponent } from './pages/zingchart/zingchart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
// decorators
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    BaseLayoutComponent,
    BaseLayoutComponent,
    ZingchartComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
