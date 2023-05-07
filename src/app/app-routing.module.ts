import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz-routing.module').then(m => m.QuizRoutingModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results-routing.module').then(m => m.ResultsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
