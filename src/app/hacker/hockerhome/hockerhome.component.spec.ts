import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HockerhomeComponent } from './hockerhome.component';

describe('HockerhomeComponent', () => {
  let component: HockerhomeComponent;
  let fixture: ComponentFixture<HockerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HockerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HockerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
