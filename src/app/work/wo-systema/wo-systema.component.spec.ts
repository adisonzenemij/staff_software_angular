import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoSystemaComponent } from './wo-systema.component';

describe('WoSystemaComponent', () => {
  let component: WoSystemaComponent;
  let fixture: ComponentFixture<WoSystemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WoSystemaComponent]
    });
    fixture = TestBed.createComponent(WoSystemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
