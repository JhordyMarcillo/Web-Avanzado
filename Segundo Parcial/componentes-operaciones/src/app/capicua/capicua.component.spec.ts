import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapicuaComponent } from './capicua.component';

describe('CapicuaComponent', () => {
  let component: CapicuaComponent;
  let fixture: ComponentFixture<CapicuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapicuaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapicuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
