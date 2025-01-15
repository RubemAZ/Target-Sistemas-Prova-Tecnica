import { Routes } from '@angular/router';
import { Question1Component } from './pages/question1/question1.component';
import { Question2Component } from './pages/question2/question2.component';
import { Question3Component } from './pages/question3/question3.component';
import { Question4Component } from './pages/question4/question4.component';
import { Question5Component } from './pages/question5/question5.component';

export const routes: Routes = [
  { path: '', redirectTo: 'question1', pathMatch: 'full' }, // Rota padrão
  { path: 'question1', component: Question1Component },
  { path: 'question2', component: Question2Component },
  { path: 'question3', component: Question3Component },
  { path: 'question4', component: Question4Component },
  { path: 'question5', component: Question5Component },
  { path: '**', redirectTo: 'question1' }, // Rota fallback
];
