import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoglistComponent } from './dialoglist.component';

describe('DialoglistComponent', () => {
  let component: DialoglistComponent;
  let fixture: ComponentFixture<DialoglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialoglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
