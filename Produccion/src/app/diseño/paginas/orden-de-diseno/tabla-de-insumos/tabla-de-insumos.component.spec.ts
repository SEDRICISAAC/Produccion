import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDeInsumosComponent } from './tabla-de-insumos.component';

describe('TablaDeInsumosComponent', () => {
  let component: TablaDeInsumosComponent;
  let fixture: ComponentFixture<TablaDeInsumosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDeInsumosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDeInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
