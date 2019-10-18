import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReatasComponent } from './reatas.component';

describe('ReatasComponent', () => {
  let component: ReatasComponent;
  let fixture: ComponentFixture<ReatasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReatasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
