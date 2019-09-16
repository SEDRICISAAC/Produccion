import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaDeDisenoComponent } from './ficha-de-diseno.component';

describe('FichaDeDisenoComponent', () => {
  let component: FichaDeDisenoComponent;
  let fixture: ComponentFixture<FichaDeDisenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaDeDisenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaDeDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
