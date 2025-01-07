import { useState } from 'react';
import { WorkoutForm } from './components/WorkoutForm';
import { WorkoutList } from './components/WorkoutList';
import { WorkoutStats } from './components/WorkoutStats';
import { useWorkouts } from './hooks/useWorkouts';
import { Workout } from './types';
import './styles/app.css';

export default function App() {
  const { workouts, addWorkout, deleteWorkout, toggleComplete, updateWorkout, stats } = useWorkouts();
  const [editingWorkout, setEditingWorkout] = useState<Workout | null>(null);

  const handleEdit = (workout: Workout) => {
    setEditingWorkout(workout);
  };

  const handleSubmit = (workout: Omit<Workout, 'id'>) => {
    if (editingWorkout) {
      updateWorkout({ ...workout, id: editingWorkout.id } as Workout);
      setEditingWorkout(null);
    } else {
      addWorkout(workout);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Fitness Tracker</h1>
      </header>

      <WorkoutForm
        onSubmit={handleSubmit}
        initialData={editingWorkout}
      />

      <WorkoutList
        workouts={workouts}
        onDelete={deleteWorkout}
        onEdit={handleEdit}
        onToggleComplete={toggleComplete}
      />

      <WorkoutStats {...stats} />
    </div>
  );
}