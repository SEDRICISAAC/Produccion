import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulodeDisenoComponent } from './modulode-diseno.component';

describe('ModulodeDisenoComponent', () => {
  let component: ModulodeDisenoComponent;
  let fixture: ComponentFixture<ModulodeDisenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulodeDisenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulodeDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
