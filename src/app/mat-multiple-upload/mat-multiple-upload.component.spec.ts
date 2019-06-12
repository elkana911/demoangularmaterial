import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMultipleUploadComponent } from './mat-multiple-upload.component';

describe('MatMultipleUploadComponent', () => {
  let component: MatMultipleUploadComponent;
  let fixture: ComponentFixture<MatMultipleUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatMultipleUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMultipleUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
