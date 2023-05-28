import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarModule } from 'ng-cdbangular';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { KhamphaComponent } from './pages/khampha/khampha.component';
import { RadioComponent } from './pages/radio/radio.component';
import { LibComponent } from './pages/lib/lib.component';
import { CanhanComponent } from './pages/canhan/canhan.component';
import { ZingchartComponent } from './pages/zingchart/zingchart.component';
import { NhacmoiComponent } from './pages/nhacmoi/nhacmoi.component';
import { TheloaiComponent } from './pages/theloai/theloai.component';
import { TheodoiComponent } from './pages/theodoi/theodoi.component';
import { Top100Component } from './pages/top100/top100.component';
import { MvComponent } from './pages/mv/mv.component';
import { FooterComponent } from './components/footer/footer.component';
// decorators
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    BaseLayoutComponent,
    KhamphaComponent,
    RadioComponent,
    LibComponent,
    BaseLayoutComponent,
    CanhanComponent,
    ZingchartComponent,
    NhacmoiComponent,
    TheloaiComponent,
    TheodoiComponent,
    Top100Component,
    MvComponent,
    FooterComponent
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
