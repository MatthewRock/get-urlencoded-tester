import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcomponentComponent } from './getcomponent.component';

describe('GetcomponentComponent', () => {
  let component: GetcomponentComponent;
  let fixture: ComponentFixture<GetcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
