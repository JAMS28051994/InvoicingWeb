import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceReportComponent } from './Components/InvoiceReport/invoice-report/invoice-report.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { InvoicingComponent } from './Components/Invoicing/invoicing/invoicing.component';
import { InvoiceDetailLineComponent } from './Components/InvoiceDetailLine/invoice-detail-line/invoice-detail-line.component';
import { InvoiceLinesComponent } from './Components/InvoiceLines/invoice-lines/invoice-lines.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'invoicing', component: InvoicingComponent },
    { path: 'invoiceReport', component: InvoiceReportComponent },
    { path: 'invoiceDetail', component: InvoiceDetailLineComponent },
    { path: 'invoiceLines/:id', component: InvoiceLinesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
