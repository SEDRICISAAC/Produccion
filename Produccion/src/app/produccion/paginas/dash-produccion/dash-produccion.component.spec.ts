import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProduccionComponent } from './dash-produccion.component';

describe('DashProduccionComponent', () => {
  let component: DashProduccionComponent;
  let fixture: ComponentFixture<DashProduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashProduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
