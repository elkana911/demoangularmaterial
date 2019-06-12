import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRightpanelComponent } from './mat-rightpanel.component';

describe('MatRightpanelComponent', () => {
  let component: MatRightpanelComponent;
  let fixture: ComponentFixture<MatRightpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatRightpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatRightpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
