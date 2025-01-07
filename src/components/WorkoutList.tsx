import { Workout } from '../types';

interface WorkoutListProps {
  workouts: Workout[];
  onDelete: (id: string) => void;
  onEdit: (workout: Workout) => void;
  onToggleComplete: (id: string) => void;
}

export function WorkoutList({ workouts, onDelete, onEdit, onToggleComplete }: WorkoutListProps) {
  return (
    <div className="workouts-list">
      {workouts.map(workout => (
        <div key={workout.id} className={`workout-card ${workout.completed ? 'completed' : ''}`}>
          <div className="workout-info">
            <div className="workout-type">{workout.type}</div>
            <div>{workout.duration} minutes on {workout.date}</div>
            <div>{workout.notes}</div>
          </div>
          <div className="workout-actions">
            <button
              className="button button-primary"
              onClick={() => onToggleComplete(workout.id)}
            >
              {workout.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              className="button button-primary"
              onClick={() => onEdit(workout)}
            >
              Edit
            </button>
            <button
              className="button button-danger"
              onClick={() => onDelete(workout.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}