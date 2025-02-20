export type Workout = {
  id: string;
  name: string;
  description: string;
  entries: WorkoutEntry[];
};

export type WorkoutEntry = {
  id: string;
  exerciseId: string;
  sets: WorkoutSet[];
};

export type Exercise = {
  id: string;
  name: string;
  description: string;
};

export type WorkoutSet = {
  id: string;
  reps: number;
  weight: number;
  isFailure: boolean;
};
