import { Text, View, StyleSheet } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

type DetailsParams = {
    route: {
        params: {
            slug: string;
        }
    }
}

export default function WorkoutDetailsScreen({route}: NativeStackHeaderProps & DetailsParams) {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Slug - {route.params.slug}</Text>
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