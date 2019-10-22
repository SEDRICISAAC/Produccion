import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProduccionComponent } from './navbar-produccion.component';

describe('NavbarProduccionComponent', () => {
  let component: NavbarProduccionComponent;
  let fixture: ComponentFixture<NavbarProduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarProduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
