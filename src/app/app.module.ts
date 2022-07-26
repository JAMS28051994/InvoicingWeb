import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { LoginService } from './Services/login.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { InvoicingService } from './Services/invoicing.service';
import { LoginComponent } from './Components/Login/login/login.component';
import { InvoicingComponent } from './Components/Invoicing/invoicing/invoicing.component';
import { InvoiceReportComponent } from './Components/InvoiceReport/invoice-report/invoice-report.component';
import { InvoiceDetailLineComponent } from './Components/InvoiceDetailLine/invoice-detail-line/invoice-detail-line.component';
import { DatePipe } from '@angular/common';
import { InvoiceLinesComponent } from './Components/InvoiceLines/invoice-lines/invoice-lines.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvoicingComponent,
    InvoiceReportComponent,
    InvoiceDetailLineComponent,
    InvoiceLinesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  providers: [LoginService, InvoicingService, DatePipe],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
