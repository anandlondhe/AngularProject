import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPAgeComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'login-page',component:LoginPAgeComponent },
  {path:'homepage',component:HomepageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginPAgeComponent,HomepageComponent]
