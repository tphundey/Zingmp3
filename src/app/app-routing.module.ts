import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { KhamphaComponent } from './pages/khampha/khampha.component';
import { RadioComponent } from './pages/radio/radio.component';
import { CanhanComponent } from './pages/canhan/canhan.component';
import { ZingchartComponent } from './pages/zingchart/zingchart.component';
import { TheodoiComponent } from './pages/theodoi/theodoi.component';
import { NhacmoiComponent } from './pages/nhacmoi/nhacmoi.component';
import { TheloaiComponent } from './pages/theloai/theloai.component';
import { Top100Component } from './pages/top100/top100.component';
import { MvComponent } from './pages/mv/mv.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "canhan", component: CanhanComponent },
      { path: "khampha", component: KhamphaComponent },
      { path: "zingchart", component: ZingchartComponent },
      { path: "radio", component: RadioComponent },
      { path: "theodoi", component: TheodoiComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
