import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortemployeeComponent } from './sortemployee.component';

describe('SortemployeeComponent', () => {
  let component: SortemployeeComponent;
  let fixture: ComponentFixture<SortemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
