import { useState } from 'react';
import { Workout } from '../types';
import { initialWorkouts } from '../data/mockData';

export function useWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>(initialWorkouts);

  const addWorkout = (workout: Omit<Workout, 'id'>) => {
    const newWorkout = {
      ...workout,
      id: Date.now().toString(),
    };
    setWorkouts([...workouts, newWorkout]);
  };

  const deleteWorkout = (id: string) => {
    setWorkouts(workouts.filter(workout => workout.id !== id));
  };

  const toggleComplete = (id: string) => {
    setWorkouts(workouts.map(workout =>
      workout.id === id ? { ...workout, completed: !workout.completed } : workout
    ));
  };

  const updateWorkout = (updatedWorkout: Workout) => {
    setWorkouts(workouts.map(workout =>
      workout.id === updatedWorkout.id ? updatedWorkout : workout
    ));
  };

  const stats = {
    total: workouts.length,
    completed: workouts.filter(w => w.completed).length,
    totalDuration: workouts.reduce((acc, curr) => acc + curr.duration, 0),
  };

  return {
    workouts,
    addWorkout,
    deleteWorkout,
    toggleComplete,
    updateWorkout,
    stats,
  };
}