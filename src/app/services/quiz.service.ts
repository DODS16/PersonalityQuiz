import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../questions';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questions = 'assets/questions.json'

  constructor( private http: HttpClient ) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questions)
  }

}
