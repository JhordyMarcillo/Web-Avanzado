import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentConfigComponent } from './parent-config.component';

describe('ParentConfigComponent', () => {
  let component: ParentConfigComponent;
  let fixture: ComponentFixture<ParentConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
