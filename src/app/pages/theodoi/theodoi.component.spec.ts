import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheodoiComponent } from './theodoi.component';

describe('TheodoiComponent', () => {
  let component: TheodoiComponent;
  let fixture: ComponentFixture<TheodoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheodoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheodoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
