import { ScoreComponent } from './score/score.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchComponent } from './match/match.component';

const routes: Routes = [
  {path: '', redirectTo: '/match', pathMatch: 'full'},
  {path: 'match', component: MatchComponent},
  {path: 'score', component: ScoreComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
