import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreComponent } from './formulario.component';

describe('NombreComponent', () => {
  let component: NombreComponent;
  let fixture: ComponentFixture<NombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NombreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
