import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailLine } from 'src/app/Interfaces/detailLine.interface';
import { InvoicingService } from 'src/app/Services/invoicing.service';

@Component({
  selector: 'app-invoice-lines',
  templateUrl: './invoice-lines.component.html',
  styleUrls: ['./invoice-lines.component.css']
})
export class InvoiceLinesComponent implements OnInit {

  detailLines: DetailLine[];
  sub: any;
  id: number;

  constructor(private invoicingService: InvoicingService, private route: ActivatedRoute) {
    this.detailLines = [];
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));

    this.invoicingService.GetInvoiceDetailLine(this.id).subscribe(response => {
      if (response) {
        this.detailLines = response as DetailLine[];
      }
    });
  }
}
