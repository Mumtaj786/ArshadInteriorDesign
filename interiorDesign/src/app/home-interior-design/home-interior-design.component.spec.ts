import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInteriorDesignComponent } from './home-interior-design.component';

describe('HomeInteriorDesignComponent', () => {
  let component: HomeInteriorDesignComponent;
  let fixture: ComponentFixture<HomeInteriorDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeInteriorDesignComponent]
    });
    fixture = TestBed.createComponent(HomeInteriorDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
