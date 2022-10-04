import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptostuffProComponent } from './cryptostuff-pro.component';

describe('CryptostuffProComponent', () => {
  let component: CryptostuffProComponent;
  let fixture: ComponentFixture<CryptostuffProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptostuffProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptostuffProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
