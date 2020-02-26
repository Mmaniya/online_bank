import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmprocessComponent } from './atmprocess.component';

describe('AtmprocessComponent', () => {
  let component: AtmprocessComponent;
  let fixture: ComponentFixture<AtmprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
