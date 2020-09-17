import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAlertComponent } from './books-alert.component';

describe('BooksAlertComponent', () => {
  let component: BooksAlertComponent;
  let fixture: ComponentFixture<BooksAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
