import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import HomeScreen from '../screens/Home.screen';
import PlannerScreen from '../screens/Planner.screen';
import WorkoutDetailsScreen from '../screens/WorkoutDetails.screen';

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Root'}
                component={BottomTabNavigator}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={'WorkoutDetails'}
                component={WorkoutDetailsScreen}
                options={{title: 'Workout Info'}}
            />
        </Stack.Navigator>
    )
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName={'Home'}>
            <BottomTab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{tabBarIcon: ({color, size}) =>
                        <Entypo
                            name={'home'}
                            size={size}
                            color={color}
                        />}}
            />
            <BottomTab.Screen
                name={'Planner'}
                component={PlannerScreen}
                options={{tabBarIcon: ({color, size}) =>
                        <Entypo
                            name={'add-to-list'}
                            size={size}
                            color={color}
                        />}}
            />
        </BottomTab.Navigator>
    )
}