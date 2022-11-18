import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTablaComponent } from './crear-tabla.component';

describe('CrearTablaComponent', () => {
  let component: CrearTablaComponent;
  let fixture: ComponentFixture<CrearTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
