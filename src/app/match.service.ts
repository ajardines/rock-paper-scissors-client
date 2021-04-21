import { Score } from './score/score';
import { Match } from './match/match';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {  } from '../app/match/match';
@Injectable()
export class MatchService {

  constructor(private http: HttpClient) { }

  /**
   * @description Get matches by session
   * @returns Matches found
   */
  public getMatchesBySession(): Observable<Match[]> {
    return this.http.get<Match[]>(environment.API + '/matches-by-session');
  }

  /**
   * @description Generate a new match
   * @returns Match generated
   */
  public newMatch(): Observable<Match> {
    return this.http.post<Match>(environment.API + '/new-match', null);
  }

  /**
   * @description Reset game
   * @returns void
   */
  public resetGame(): Observable<void> {
    return this.http.put<void>(environment.API + '/reset', null);
  }

  /**
   * @description Get total score
   * @returns Score
   */
  public getScore(): Observable<Score> {
    return this.http.get<Score>(environment.API + '/score');
  }
}
