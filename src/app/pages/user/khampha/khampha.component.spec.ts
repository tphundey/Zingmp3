import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamphaComponent } from './khampha.component';

describe('KhamphaComponent', () => {
  let component: KhamphaComponent;
  let fixture: ComponentFixture<KhamphaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhamphaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhamphaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
