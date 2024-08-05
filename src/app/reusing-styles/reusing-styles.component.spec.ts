import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusingStylesComponent } from './reusing-styles.component';

describe('ReusingStylesComponent', () => {
  let component: ReusingStylesComponent;
  let fixture: ComponentFixture<ReusingStylesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReusingStylesComponent]
    });
    fixture = TestBed.createComponent(ReusingStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
