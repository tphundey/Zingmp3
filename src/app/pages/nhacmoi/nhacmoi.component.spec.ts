import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhacmoiComponent } from './nhacmoi.component';

describe('NhacmoiComponent', () => {
  let component: NhacmoiComponent;
  let fixture: ComponentFixture<NhacmoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhacmoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhacmoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
