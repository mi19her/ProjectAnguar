import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicionBarcosComponent } from './posicion-barcos.component';

describe('PosicionBarcosComponent', () => {
  let component: PosicionBarcosComponent;
  let fixture: ComponentFixture<PosicionBarcosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosicionBarcosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicionBarcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
