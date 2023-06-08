import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { KhamphaComponent } from './pages/user/khampha/khampha.component';
import { ZingchartComponent } from './pages/user/zingchart/zingchart.component';
import { HomeComponent } from './pages/user/home/home.component';
import { LoginComponent } from './pages/user/login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';



const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "khampha", component: KhamphaComponent },
      { path: "zingchart", component: ZingchartComponent },
      { path: "login", component: LoginComponent }

    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "add", component: AddProductComponent },
      { path: ":id/edit", component:EditProductComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
