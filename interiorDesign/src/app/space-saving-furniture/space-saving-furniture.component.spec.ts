import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceSavingFurnitureComponent } from './space-saving-furniture.component';

describe('SpaceSavingFurnitureComponent', () => {
  let component: SpaceSavingFurnitureComponent;
  let fixture: ComponentFixture<SpaceSavingFurnitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceSavingFurnitureComponent]
    });
    fixture = TestBed.createComponent(SpaceSavingFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
