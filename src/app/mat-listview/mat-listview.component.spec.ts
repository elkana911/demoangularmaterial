import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatListviewComponent } from './mat-listview.component';

describe('MatListviewComponent', () => {
  let component: MatListviewComponent;
  let fixture: ComponentFixture<MatListviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatListviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
