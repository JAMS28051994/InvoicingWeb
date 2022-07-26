import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { DetailLine } from 'src/app/Interfaces/detailLine.interface';

@Component({
  selector: 'app-invoice-detail-line',
  templateUrl: './invoice-detail-line.component.html',
  styleUrls: ['./invoice-detail-line.component.css'],
})

export class InvoiceDetailLineComponent implements OnInit, AfterViewInit {

  detailLines: DetailLine[];
  divsCounter: number;
  @ViewChild('detailLinesDiv') detailLinesDiv: any;
  @ViewChild('container', { read: ViewContainerRef }) container: any;
  @Output() emitter = new EventEmitter<DetailLine[]>();

  constructor() {
    this.divsCounter = 1;
    this.detailLines = [];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  public duplicateDetailLine() {
    this.divsCounter++;
    this.container.createEmbeddedView(this.detailLinesDiv);

    let descriptionDiv = (<HTMLInputElement>document.getElementById('productDescription_'));
    descriptionDiv.id = 'productDescription_' + this.divsCounter;
    let amountDiv = (<HTMLInputElement>document.getElementById('amount_'));
    amountDiv.id = 'amount_' + this.divsCounter;
    let totalPriceDiv = (<HTMLInputElement>document.getElementById('price_'));
    totalPriceDiv.id = 'price_' + this.divsCounter;
  }

  CreateAndSendDetailLines() {
    for (let i = 1; i <= this.divsCounter; i++) {
      let descriptionDiv = (<HTMLInputElement>document.getElementById('productDescription_' + i));
      let amountDiv = (<HTMLInputElement>document.getElementById('amount_' + i));
      let totalPriceDiv = (<HTMLInputElement>document.getElementById('price_' + i));

      console.log(descriptionDiv);

      let detailLine: DetailLine = {
        id: 0,
        description: String(descriptionDiv.value),
        amount: Number(amountDiv.value),
        price: Number(totalPriceDiv.value)
      }

      this.detailLines.push(detailLine);
    }

    this.emitter.emit(this.detailLines);
  }
}



