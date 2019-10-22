import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProduccionComponent } from './sidebar-produccion.component';

describe('SidebarProduccionComponent', () => {
  let component: SidebarProduccionComponent;
  let fixture: ComponentFixture<SidebarProduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarProduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
