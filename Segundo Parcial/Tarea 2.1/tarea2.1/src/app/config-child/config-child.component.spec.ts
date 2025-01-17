import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigChildComponent } from './config-child.component';

describe('ConfigChildComponent', () => {
  let component: ConfigChildComponent;
  let fixture: ComponentFixture<ConfigChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
