import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarModule } from 'ng-cdbangular';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { KhamphaComponent } from './pages/khampha/khampha.component';
import { RadioComponent } from './pages/radio/radio.component';
import { LibComponent } from './pages/lib/lib.component';
// decorators
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    SidebarComponent,
    BaseLayoutComponent,
    KhamphaComponent,
    RadioComponent,
    LibComponent,
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
