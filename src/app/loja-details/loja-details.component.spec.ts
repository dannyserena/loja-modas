import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaDetailsComponent } from './loja-details.component';

describe('LojaDetailsComponent', () => {
  let component: LojaDetailsComponent;
  let fixture: ComponentFixture<LojaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
