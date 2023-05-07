export interface Question {
  id: number;
  title: string;
  correctOptionId: number;
  options: Option[];
  answer: number;
}

export interface Option {
  id: number;
  questionId: number;
  name: string;
}