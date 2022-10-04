import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingSandboxComponent } from './trading-sandbox.component';

describe('TradingSandboxComponent', () => {
  let component: TradingSandboxComponent;
  let fixture: ComponentFixture<TradingSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingSandboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
