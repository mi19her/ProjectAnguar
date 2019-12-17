import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroRivalComponent } from './tablero-rival.component';

describe('TableroRivalComponent', () => {
  let component: TableroRivalComponent;
  let fixture: ComponentFixture<TableroRivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableroRivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroRivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
