import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIcongridComponent } from './mat-icongrid.component';

describe('MatIcongridComponent', () => {
  let component: MatIcongridComponent;
  let fixture: ComponentFixture<MatIcongridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatIcongridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatIcongridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
