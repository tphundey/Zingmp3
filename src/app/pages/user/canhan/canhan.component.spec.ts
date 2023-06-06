import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanhanComponent } from './canhan.component';

describe('CanhanComponent', () => {
  let component: CanhanComponent;
  let fixture: ComponentFixture<CanhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanhanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
