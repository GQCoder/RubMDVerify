import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiBoxComponent } from './verifi-box.component';

describe('VerifiBoxComponent', () => {
  let component: VerifiBoxComponent;
  let fixture: ComponentFixture<VerifiBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
