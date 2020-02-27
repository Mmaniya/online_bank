import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerhomeComponent } from './hackerhome.component';

describe('HackerhomeComponent', () => {
  let component: HackerhomeComponent;
  let fixture: ComponentFixture<HackerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
