import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZingchartComponent } from './zingchart.component';

describe('ZingchartComponent', () => {
  let component: ZingchartComponent;
  let fixture: ComponentFixture<ZingchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZingchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZingchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
