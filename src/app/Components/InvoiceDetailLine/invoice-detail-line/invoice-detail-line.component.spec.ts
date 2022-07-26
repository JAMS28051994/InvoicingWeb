import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailLineComponent } from './invoice-detail-line.component';

describe('InvoiceDetailLineComponent', () => {
  let component: InvoiceDetailLineComponent;
  let fixture: ComponentFixture<InvoiceDetailLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceDetailLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
