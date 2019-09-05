import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInventarioComponent } from './header-inventario.component';

describe('HeaderInventarioComponent', () => {
  let component: HeaderInventarioComponent;
  let fixture: ComponentFixture<HeaderInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
