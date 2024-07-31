import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityFirstComponent } from './utility-first.component';

describe('UtilityFirstComponent', () => {
  let component: UtilityFirstComponent;
  let fixture: ComponentFixture<UtilityFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilityFirstComponent]
    });
    fixture = TestBed.createComponent(UtilityFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
