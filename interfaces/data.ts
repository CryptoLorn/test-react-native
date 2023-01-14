export type DifficultyType = 'easy' | 'normal' | 'hard';
export type SequenceType = 'exercise' | 'stretch' | 'break';

export interface IWorkout {
    slug: string;
    name: string;
    duration: number;
    difficulty: DifficultyType;
    sequence: ISequence[];
}

export interface ISequence {
    slug: string;
    name: string;
    type: SequenceType;
    reps?: number;
    duration: number;
}

