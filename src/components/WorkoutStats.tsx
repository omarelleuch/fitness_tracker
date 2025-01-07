interface WorkoutStatsProps {
  total: number;
  completed: number;
  totalDuration: number;
}

export function WorkoutStats({ total, completed, totalDuration }: WorkoutStatsProps) {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <div className="summary-stats">
        <div className="stat-card">
          <div className="stat-value">{total}</div>
          <div className="stat-label">Total Workouts</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{completed}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalDuration}</div>
          <div className="stat-label">Total Minutes</div>
        </div>
      </div>
    </div>
  );
}