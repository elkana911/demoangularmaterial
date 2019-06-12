import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSlidertoggleComponent } from './mat-slidertoggle.component';

describe('MatSlidertoggleComponent', () => {
  let component: MatSlidertoggleComponent;
  let fixture: ComponentFixture<MatSlidertoggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSlidertoggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSlidertoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
