import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverFocusAndOthersComponent } from './hover-focus-and-others.component';

describe('HoverFocusAndOthersComponent', () => {
  let component: HoverFocusAndOthersComponent;
  let fixture: ComponentFixture<HoverFocusAndOthersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverFocusAndOthersComponent]
    });
    fixture = TestBed.createComponent(HoverFocusAndOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
