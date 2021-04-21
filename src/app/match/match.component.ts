import { MatchService } from './../match.service';
import { Component, OnInit } from '@angular/core';
import { Match } from './match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  public matches: Match[];

  constructor(private matchService: MatchService) {
    this.matches = [];
   }

  /**
   * @description Init life hook
   * @return void
   */
  ngOnInit(): void {
    this.getMatchesBySession();
  }

  /**
   * @description Get matches by session
   * @returns void
   */
  public getMatchesBySession(): void {
    this.matchService.getMatchesBySession().subscribe(
      (response: Match[]) => {
        this.matches = response;
      });
  }

  /**
   * @description Generate a new match
   * @returns void
   */
  public newMatch(): void {
    this.matchService.newMatch().subscribe(
      (response: Match) => {
        this.matches.unshift(response);
      });
  }

  /**
   * @description Reset game
   * @returns void
   */
  public resetGame(): void {
    this.matchService.resetGame().subscribe(
      () => {
        this.matches = [];
      });
  }

}
