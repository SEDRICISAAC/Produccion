import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichadisenoComponent } from './fichadiseno.component';

describe('FichadisenoComponent', () => {
  let component: FichadisenoComponent;
  let fixture: ComponentFixture<FichadisenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichadisenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichadisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
