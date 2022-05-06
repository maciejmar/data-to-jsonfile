import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogstwoComponent } from './dialogstwo.component';

describe('DialogstwoComponent', () => {
  let component: DialogstwoComponent;
  let fixture: ComponentFixture<DialogstwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogstwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
