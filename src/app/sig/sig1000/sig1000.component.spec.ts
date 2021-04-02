import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sig1000Component } from './sig1000.component';

describe('Sig1000Component', () => {
  let component: Sig1000Component;
  let fixture: ComponentFixture<Sig1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sig1000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sig1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
