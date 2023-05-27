import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { KhamphaComponent } from './pages/khampha/khampha.component';
import { RadioComponent } from './pages/radio/radio.component';
import { LibComponent } from './pages/lib/lib.component';


const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "khampha", component: KhamphaComponent },
      { path: "radio", component: RadioComponent },
      { path: "lib", component: LibComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
