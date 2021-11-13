import { Component, OnInit } from '@angular/core';
import { WikitopService } from '../../service/wikitop.service';
import { Wikitop } from '../../models/wikitop';
import { Article } from '../../models/article';
import { Language } from '../../models/language';

@Component({
  selector: 'wikitop-list',
  templateUrl: './wikitop-list.component.html',
  styleUrls: ['./wikitop-list.component.scss'],
})
export class WikitopListComponent implements OnInit {
  wikiTops: Article[] = [];
  languages: Language[] = Object.values(Language);
  language: string = '';
  errorMessageOnNoArticle: string = '';
  constructor(private readonly wikiTopService: WikitopService) {}

  ngOnInit(): void {
    this.getAllWikiArticles();
  }

  onLanguageSelect(): void {
    this.getAllWikiArticles(this.language);
  }

  private getAllWikiArticles(language?: string): void {
    this.wikiTopService.getAllWikiArticles(language).subscribe(
      (wikitop: Wikitop): Article[] =>
        (this.wikiTops = wikitop.items[0].articles),
      (error: string): string => (this.errorMessageOnNoArticle = error)
    );
  }
}
