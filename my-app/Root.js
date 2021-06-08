import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';

import Login from './src/pages/Login';
import Feed from './src/pages/Feed';
import Cadastro from "./src/pages/Cadastro";


const Stack = createStackNavigator();

function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ gestureEnabled: false }}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name="Feed"
                    component={Feed}
                    initialParams={{ user: 'me' }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    initialParams={{ user: 'me' }}
                    options={{ title: 'Cadastro' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;