import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignGalleryComponent } from './design-gallery.component';

describe('DesignGalleryComponent', () => {
  let component: DesignGalleryComponent;
  let fixture: ComponentFixture<DesignGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignGalleryComponent]
    });
    fixture = TestBed.createComponent(DesignGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
