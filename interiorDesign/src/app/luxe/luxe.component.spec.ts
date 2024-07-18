import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxeComponent } from './luxe.component';

describe('LuxeComponent', () => {
  let component: LuxeComponent;
  let fixture: ComponentFixture<LuxeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuxeComponent]
    });
    fixture = TestBed.createComponent(LuxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
