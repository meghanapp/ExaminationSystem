import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    UserhomeComponent,
    AboutusComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
