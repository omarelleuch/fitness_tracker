import { useState } from 'react';
import { Workout } from '../types';

interface WorkoutFormProps {
  onSubmit: (workout: Omit<Workout, 'id'>) => void;
  initialData: Workout | null;
}

export function WorkoutForm({ onSubmit, initialData }: WorkoutFormProps) {
  const [formData, setFormData] = useState<Partial<Workout>>(
    initialData || {
      type: 'running',
      duration: 30,
      date: new Date().toISOString().split('T')[0],
      completed: false,
      notes: '',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData) {
      setFormData({
        type: 'running',
        duration: 30,
        date: new Date().toISOString().split('T')[0],
        completed: false,
        notes: '',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="type">Workout Type</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="running">Running</option>
          <option value="cycling">Cycling</option>
          <option value="weightlifting">Weightlifting</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="duration">Duration (minutes)</label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          min="1"
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="button button-primary">
        {initialData ? 'Update Workout' : 'Add Workout'}
      </button>
    </form>
  );
}