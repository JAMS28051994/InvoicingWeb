import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/Interfaces/invoice.interface';
import { InvoicingService } from 'src/app/Services/invoicing.service';

@Component({
  selector: 'app-invoice-report',
  templateUrl: './invoice-report.component.html',
  styleUrls: ['./invoice-report.component.css']
})
export class InvoiceReportComponent implements OnInit {

  invoices: Invoice[];
  invoicesAmount: number;
  sub: any;

  constructor(private invoicingService: InvoicingService) {
    this.invoices = [];
    this.invoicesAmount = 0;
  }

  ngOnInit(): void {
    this.invoicingService.GetClientInvoices(2).subscribe(response => {
      if (response) {
        this.invoices = response as Invoice[];
        this.invoicesAmount = this.invoices.length;
      }
    });
  }
}
