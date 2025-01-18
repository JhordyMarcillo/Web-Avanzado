import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVarianteComponent } from './registro-variante.component';

describe('RegistroVarianteComponent', () => {
  let component: RegistroVarianteComponent;
  let fixture: ComponentFixture<RegistroVarianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroVarianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroVarianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
