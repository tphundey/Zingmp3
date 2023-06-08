import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/user/home/home.component';
import { SidebarComponent } from './components/user/sidebar/sidebar.component';
import { SidebarModule } from 'ng-cdbangular';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { CanhanComponent } from './pages/user/canhan/canhan.component';
import { ZingchartComponent } from './pages/user/zingchart/zingchart.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { HeaderComponent } from './components/user/header/header.component';
import { LoginComponent } from './pages/user/login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminFooterComponent } from './components/admin/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';


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
    LoginComponent,
    AdminLayoutComponent,
    DashboardComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AddProductComponent,
    EditProductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
