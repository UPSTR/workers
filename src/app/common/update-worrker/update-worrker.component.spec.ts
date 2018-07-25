import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorrkerComponent } from './update-worrker.component';

describe('UpdateWorrkerComponent', () => {
  let component: UpdateWorrkerComponent;
  let fixture: ComponentFixture<UpdateWorrkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWorrkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWorrkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
