import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component'
import { AboutComponent } from './about/about.component';
import { StaffComponent } from './staff/staff.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component:HomeComponent},
	{path: 'employee/:id', component:EmployeeDetailsComponent},
	{path: 'about', component:AboutComponent},
	{path: 'staff', component:StaffComponent},
	{path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
