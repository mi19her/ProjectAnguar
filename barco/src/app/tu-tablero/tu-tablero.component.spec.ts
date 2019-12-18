import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuTableroComponent } from './tu-tablero.component';

describe('TuTableroComponent', () => {
  let component: TuTableroComponent;
  let fixture: ComponentFixture<TuTableroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuTableroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuTableroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
