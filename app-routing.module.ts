import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ReportComponent } from './components/report/report.component';
import { UserhomeComponent } from './components/userhome/userhome.component';


const routes: Routes = [
  {path: "mainpage", component: MainpageComponent},
  {path: "userhome", component: UserhomeComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "report", component: ReportComponent},
  {path: "**", redirectTo: "mainpage"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
