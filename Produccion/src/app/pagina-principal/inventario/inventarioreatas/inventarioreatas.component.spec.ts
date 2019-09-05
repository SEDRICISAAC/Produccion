import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioreatasComponent } from './inventarioreatas.component';

describe('InventarioreatasComponent', () => {
  let component: InventarioreatasComponent;
  let fixture: ComponentFixture<InventarioreatasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioreatasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioreatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
