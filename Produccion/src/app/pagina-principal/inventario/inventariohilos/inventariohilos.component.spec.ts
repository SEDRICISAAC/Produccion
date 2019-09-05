import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventariohilosComponent } from './inventariohilos.component';

describe('InventariohilosComponent', () => {
  let component: InventariohilosComponent;
  let fixture: ComponentFixture<InventariohilosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventariohilosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventariohilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
