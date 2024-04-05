import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoExternalComponent } from './wo-external.component';

describe('WoExternalComponent', () => {
  let component: WoExternalComponent;
  let fixture: ComponentFixture<WoExternalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WoExternalComponent]
    });
    fixture = TestBed.createComponent(WoExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
