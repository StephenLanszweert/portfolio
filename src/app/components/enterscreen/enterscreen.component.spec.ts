import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterscreenComponent } from './enterscreen.component';

describe('EnterscreenComponent', () => {
  let component: EnterscreenComponent;
  let fixture: ComponentFixture<EnterscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
