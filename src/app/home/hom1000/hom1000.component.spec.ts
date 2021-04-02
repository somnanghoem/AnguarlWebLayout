import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hom1000Component } from './hom1000.component';

describe('Hom1000Component', () => {
  let component: Hom1000Component;
  let fixture: ComponentFixture<Hom1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hom1000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hom1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
