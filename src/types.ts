export interface Workout {
  id: string;
  type: 'running' | 'cycling' | 'weightlifting';
  duration: number;
  date: string;
  completed: boolean;
  notes?: string;
}