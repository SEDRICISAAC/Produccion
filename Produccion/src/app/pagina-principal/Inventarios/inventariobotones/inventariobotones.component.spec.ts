import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventariobotonesComponent } from './inventariobotones.component';

describe('InventariobotonesComponent', () => {
  let component: InventariobotonesComponent;
  let fixture: ComponentFixture<InventariobotonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventariobotonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventariobotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
