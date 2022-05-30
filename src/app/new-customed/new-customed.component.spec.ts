import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomedComponent } from './new-customed.component';

describe('NewCustomedComponent', () => {
  let component: NewCustomedComponent;
  let fixture: ComponentFixture<NewCustomedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCustomedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCustomedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
