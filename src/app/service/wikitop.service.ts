import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Wikitop } from '../models/wikitop';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WikitopService {
  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth() + 1;
  currentDate: Date = new Date();
  yesterdayDate: string = String(
    new Date(this.currentDate.setDate(this.currentDate.getDate() - 1)).getDate()
  ).padStart(2, '0');

  constructor(private readonly http: HttpClient) {}

  getAllWikiArticles(language: string = 'fa'): Observable<Wikitop> {
    const BASE_URL: string = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${language}.wikipedia.org/all-access/${this.currentYear}/${this.currentMonth}/${this.yesterdayDate}`;

    return this.http.get<Wikitop>(BASE_URL).pipe(
      mergeMap((article: Wikitop): Observable<Wikitop> => {
        return article.items.length
          ? of(article)
          : throwError('There is no article.');
      })
    );
  }
}
