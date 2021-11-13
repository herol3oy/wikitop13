import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikitopTopbarComponent } from './wikitop-topbar.component';

describe('WikitopTopbarComponent', () => {
  let component: WikitopTopbarComponent;
  let fixture: ComponentFixture<WikitopTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WikitopTopbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikitopTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
