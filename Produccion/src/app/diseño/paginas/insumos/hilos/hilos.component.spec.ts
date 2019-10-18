import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HilosComponent } from './hilos.component';

describe('HilosComponent', () => {
  let component: HilosComponent;
  let fixture: ComponentFixture<HilosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HilosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
