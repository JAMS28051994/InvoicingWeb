import { Component, OnInit } from '@angular/core';
import { DetailLine } from 'src/app/Interfaces/detailLine.interface';
import { Invoice } from 'src/app/Interfaces/invoice.interface';
import { Vendor } from 'src/app/Interfaces/vendor.interface';
import { InvoicingService } from 'src/app/Services/invoicing.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { VendorService } from 'src/app/Services/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.css']
})
export class InvoicingComponent implements OnInit {

  invoiceControl = this.formBuilder.group({
    invoiceNumber: new FormControl(),
    vendorId: new FormControl(),
    date: new FormControl(),
    productDescription: new FormControl(),
    amount: new FormControl(),
    price: new FormControl()
  });

  invoiceDate: Date;
  vendorId: number;
  vendors: Vendor[];

  constructor(private invoicingService: InvoicingService, private vendorService: VendorService, private formBuilder: FormBuilder) {
    this.invoiceDate = new Date();
    this.vendorId = 0;
    this.vendors = [];
  }

  ngOnInit(): void {
    this.vendorService.GetAllVendors().subscribe(response => {
      if (response) {
        this.vendors = response as Vendor[];
      }
    });
  }

  public onSubmit($event: DetailLine[]) {
    let date = new Date(this.invoiceControl.get("date")?.value);

    let invoice: Invoice = {
      id: 0,
      invoiceNumber: String(this.invoiceControl.get("invoiceNumber")?.value),
      date: new Date(this.invoiceControl.get("date")?.value),
      vendorId: Number(this.invoiceControl.get("vendorId")?.value),
      clientId: 2,
      detailLines: $event,
      totalPrice: 0
    }

    this.invoicingService.CreateNewInvoice(invoice).subscribe(response => {
      if (response) {
        this.alertWithSuccess();
      }
    });
  }

  formatDate(date: Date) {
    return [
      this.formatNumber(date.getDate() + 1),
      this.formatNumber(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }

  formatNumber(num: Number) {
    return num.toString().padStart(2, '0');
  }

  alertWithSuccess() {
    Swal.fire({ title: 'Invoice created', text: 'Invoice successfully created', confirmButtonText: 'Ok', confirmButtonColor: '#0d6efd', icon: 'success' })
  }
}
