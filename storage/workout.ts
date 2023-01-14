import {containKey, getData, removeItem, storeData} from "./index";
import data from "../data.json";
import {IWorkout} from "../interfaces/data";

export const getWorkouts = async (): Promise<IWorkout[]> => {
    const workouts = await getData('workout_data');

    return workouts;
}

export const initWorkouts = async (): Promise<boolean> => {
    const hasWorkouts = await containKey('workout_data');

    if (!hasWorkouts) {
        await storeData('workout_data', data);

        return true;
    }

    return false;
}

export const clearWorkouts = async () => {
    await removeItem('workout_data');
}