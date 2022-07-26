import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Invoice } from '../Interfaces/invoice.interface';

const API_URL = environment.APIUrl;
@Injectable({ providedIn: 'root' })

export class InvoicingService {

    constructor(private httpClient: HttpClient) {

    }

    public CreateNewInvoice(invoice: Invoice) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic am1hZHJpZ2FsXzk0QG91dGxvb2suY29tOlBhc3N3b3JkMTIz'
            })
        };

        const body = JSON.stringify(invoice);

        return this.httpClient.post(API_URL + 'Invoice', body, httpOptions);
    }

    public GetClientInvoices(clientId: number) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic am1hZHJpZ2FsXzk0QG91dGxvb2suY29tOlBhc3N3b3JkMTIz'
            })
        };

        return this.httpClient.get(API_URL + 'Client/clientInvoices/' + clientId, httpOptions);
    }

    public GetInvoiceDetailLine(invoiceId: number) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic am1hZHJpZ2FsXzk0QG91dGxvb2suY29tOlBhc3N3b3JkMTIz'
            })
        };

        return this.httpClient.get(API_URL + 'Invoice/invoiceDetailLines/' + invoiceId, httpOptions);
    }
}