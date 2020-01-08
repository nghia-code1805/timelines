import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoitaoComponent } from './moitao.component';

describe('MoitaoComponent', () => {
  let component: MoitaoComponent;
  let fixture: ComponentFixture<MoitaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoitaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoitaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
