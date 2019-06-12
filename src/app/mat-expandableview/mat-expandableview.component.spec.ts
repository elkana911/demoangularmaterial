import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatExpandableviewComponent } from './mat-expandableview.component';

describe('MatExpandableviewComponent', () => {
  let component: MatExpandableviewComponent;
  let fixture: ComponentFixture<MatExpandableviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatExpandableviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatExpandableviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
