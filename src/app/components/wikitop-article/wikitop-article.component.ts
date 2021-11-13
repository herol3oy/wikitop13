import { Component, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'wikitop-article',
  templateUrl: './wikitop-article.component.html',
  styleUrls: ['./wikitop-article.component.scss'],
})
export class WikitopArticleComponent {
  @Input() language: string = 'fa';
  @Input() article: Article = {
    article: '',
    views: 0,
    rank: 0,
  };

  constructor() {}
}
