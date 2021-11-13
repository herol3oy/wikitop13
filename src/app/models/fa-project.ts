import { Article } from './article';

export interface FaProject {
  project: string;
  access: string;
  year: string;
  month: string;
  day: string;
  articles: Article[];
}
