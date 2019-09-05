import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventariotelasComponent } from './inventariotelas.component';

describe('InventariotelasComponent', () => {
  let component: InventariotelasComponent;
  let fixture: ComponentFixture<InventariotelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventariotelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventariotelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
