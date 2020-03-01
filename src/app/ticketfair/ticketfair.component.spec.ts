import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketfairComponent } from './ticketfair.component';

describe('TicketfairComponent', () => {
  let component: TicketfairComponent;
  let fixture: ComponentFixture<TicketfairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketfairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketfairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
