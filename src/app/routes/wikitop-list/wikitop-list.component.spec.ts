import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikitopListComponent } from './wikitop-list.component';

describe('WikitopListComponent', () => {
  let component: WikitopListComponent;
  let fixture: ComponentFixture<WikitopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WikitopListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikitopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
