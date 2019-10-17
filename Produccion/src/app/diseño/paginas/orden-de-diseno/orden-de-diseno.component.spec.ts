import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenDeDisenoComponent } from './orden-de-diseno.component';

describe('OrdenDeDisenoComponent', () => {
  let component: OrdenDeDisenoComponent;
  let fixture: ComponentFixture<OrdenDeDisenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenDeDisenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenDeDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
