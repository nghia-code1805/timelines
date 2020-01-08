import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulolComponent } from './culol.component';

describe('CulolComponent', () => {
  let component: CulolComponent;
  let fixture: ComponentFixture<CulolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
