import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Welcome from '../pages/Welcome/index'
import Signin from '../pages/Signin/index'
import Cadastro from '../pages/Cadastro'
import PagInicial from '../pages/PagInicial/index'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="Signin"
            component={Signin}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            />

            <Stack.Screen
            name='PagInicial'
            component={PagInicial}
            />

        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen 
        name={SCREENS.HOME} 
        component={PagInicial} 
        options={title: 'home'}/>
    </Tab.Navigator>
}