import { DetailLine } from "./detailLine.interface";

export interface Invoice {
    id: number
    date: Date;
    invoiceNumber: string;
    vendorId: number;
    detailLines: DetailLine[];
    clientId: number;
    totalPrice: number
}