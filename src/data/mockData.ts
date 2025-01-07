import { Workout } from '../types';

export const initialWorkouts: Workout[] = [
  {
    id: '1',
    type: 'running',
    duration: 30,
    date: '2024-03-10',
    completed: true,
    notes: 'Morning jog in the park'
  },
  {
    id: '2',
    type: 'cycling',
    duration: 45,
    date: '2024-03-11',
    completed: false,
    notes: 'City bike tour'
  },
  {
    id: '3',
    type: 'weightlifting',
    duration: 60,
    date: '2024-03-12',
    completed: false,
    notes: 'Upper body focus'
  }
];