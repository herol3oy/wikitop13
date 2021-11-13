import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikitopArticleComponent } from './wikitop-article.component';

describe('WikitopArticleComponent', () => {
  let component: WikitopArticleComponent;
  let fixture: ComponentFixture<WikitopArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WikitopArticleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikitopArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
