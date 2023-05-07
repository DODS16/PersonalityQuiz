import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  result = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { result: string };
    if (state) {
      this.result = state.result;
    }
  }

  ngOnInit(): void {}

  getResultText(): string {
    if (this.result === 'introvert') {
      return 'introverted';
    } else if (this.result === 'extrovert') {
      return 'extroverted';
    } else {
      return 'neutral';
    }
  }
}
