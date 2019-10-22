import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartProduccionComponent } from './chart-produccion.component';

describe('ChartProduccionComponent', () => {
  let component: ChartProduccionComponent;
  let fixture: ComponentFixture<ChartProduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartProduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
