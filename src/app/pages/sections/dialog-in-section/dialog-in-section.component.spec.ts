import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInSectionComponent } from './dialog-in-section.component';

describe('DialogInSectionComponent', () => {
  let component: DialogInSectionComponent;
  let fixture: ComponentFixture<DialogInSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
