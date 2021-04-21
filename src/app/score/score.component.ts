import { MatchService } from './../match.service';
import { Component, OnInit } from '@angular/core';
import { Score } from './score';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  public score: Score;

  constructor(private matchService: MatchService) {
    this.score = new Score();
  }

  /**
   * @description Init life hook
   * @return void
   */
  ngOnInit(): void {
    this.getScore();
  }

  /**
   * @description Get total score
   * @returns void
   */
  public getScore(): void {
    this.matchService.getScore().subscribe(
      (response: Score) => {
        this.score = response;
      });
  }
}
