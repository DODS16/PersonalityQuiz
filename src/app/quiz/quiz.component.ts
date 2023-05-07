import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Question } from '../questions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {
  quizQuestions: Question[] = [];
  questionNumber: number = 0;
  userSelections: number[] = [];
  timeSpent: number = 0;

  constructor(
    private quizService: QuizService,
    private router: Router
    ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.timeSpent++;
    }, 1000);
    this.quizService.getQuestions().subscribe({
      next: questions => {
        this.quizQuestions = questions;
      },
      error: (err: any) => {
        console.error(err)
      }
    });
  }

  onSelection(option: number) {  
    this.userSelections[this.questionNumber] = option;
    if (this.questionNumber < this.quizQuestions.length - 1){
      this.questionNumber++;
    } else {
      this.calculateResult();
      this.router.navigate(['/results'], { state: { result: this.calculateResult() } });
    }
  }

  onNext() {
    if (this.questionNumber < this.quizQuestions.length - 1) {
      this.questionNumber++;
    }
  }

  onPrevious() {
    if (this.questionNumber > 0) {
      this.questionNumber--;
    }
  }

  calculateResult(): string {
    let introvertCount = 0;
    let extrovertCount = 0;
    for (let i = 0; i < this.userSelections.length; i++) {
      if (this.userSelections[i] === 0 || this.userSelections[i] === 1) {
        introvertCount++;
      } else if (this.userSelections[i] === 2 || this.userSelections[i] === 3) {
        extrovertCount++;
      }
    }
    switch (true) {
      case introvertCount >= 2:
        return 'introvert';
      case extrovertCount >= 2:
        return 'extrovert';
      default:
        return 'neutral';
    }
  }
}
