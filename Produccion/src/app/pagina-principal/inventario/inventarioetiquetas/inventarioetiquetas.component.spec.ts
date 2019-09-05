import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioetiquetasComponent } from './inventarioetiquetas.component';

describe('InventarioetiquetasComponent', () => {
  let component: InventarioetiquetasComponent;
  let fixture: ComponentFixture<InventarioetiquetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioetiquetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioetiquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
