import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatListdialogComponent } from './mat-listdialog.component';

describe('MatListdialogComponent', () => {
  let component: MatListdialogComponent;
  let fixture: ComponentFixture<MatListdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatListdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatListdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
