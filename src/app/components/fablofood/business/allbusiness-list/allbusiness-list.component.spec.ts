import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbusinessListComponent } from './allbusiness-list.component';

describe('AllbusinessListComponent', () => {
  let component: AllbusinessListComponent;
  let fixture: ComponentFixture<AllbusinessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbusinessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbusinessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
