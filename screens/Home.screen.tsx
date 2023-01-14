import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import { IWorkout } from '../interfaces/data';
import WorkoutItem from '../components/WorkoutItem';
import { getWorkouts } from '../storage/workout';

export default function HomeScreen({navigation}: NativeStackHeaderProps) {
    const [workouts, setWorkouts] = useState<IWorkout[]>([]);

    useEffect(() => {
        async function getData() {
            const workouts = await getWorkouts();
            setWorkouts(workouts);
        }

        getData();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.header}>New Workout</Text>
            <FlatList
                data={workouts}
                renderItem={({item}) => {
                    return (
                        <Pressable onPress={() => navigation.navigate('WorkoutDetails', {slug: item.slug})}>
                            <WorkoutItem item={item}/>
                        </Pressable>
                    )
                }}
                keyExtractor={item => item.slug}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    }
});