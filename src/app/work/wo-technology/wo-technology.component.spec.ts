import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoTechnologyComponent } from './wo-technology.component';

describe('WoTechnologyComponent', () => {
  let component: WoTechnologyComponent;
  let fixture: ComponentFixture<WoTechnologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WoTechnologyComponent]
    });
    fixture = TestBed.createComponent(WoTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
