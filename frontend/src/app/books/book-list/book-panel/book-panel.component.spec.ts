import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookPanelComponent } from './book-panel.component';

describe('BookPanelComponent', () => {
  let component: BookPanelComponent;
  let fixture: ComponentFixture<BookPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
