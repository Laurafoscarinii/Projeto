import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, View, StyleSheet } from 'react-native';

// Importando as páginas
import Welcome from '../pages/Welcome';
import Signin from '../pages/Signin';
import Cadastro from '../pages/Cadastro';
import PagAbrigoScreen from '../pages/PagAbrigo/PagAbrigoScreen';
import PagPerfilScreen from '../pages/PagPerfil/PagPerfilScreen';
import PagPesquisaScreen from '../pages/PagPesquisa/PagPesquisaScreen';
import PagInicialScreen from '../pages/PagInicial/PagInicialScreen';
import CadUsuario from '../pages/cadUsuario/cadUsuario'; // Importe a nova tela

// Criação dos navegadores
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Nome das páginas
const PAGES = {
    PagInicial: 'PagInicial',
    PagAbrigo: 'PagAbrigo',
    PagPerfil: 'PagPerfil',
    PagPesquisa: 'PagPesquisa',
    CadUsuario: 'CadUsuario' // Adicione a tela ao objeto PAGES
};

// Navegação por abas
function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={PAGES.PagInicial}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case PAGES.PagInicial:
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case PAGES.PagAbrigo:
                            iconName = focused ? 'star' : 'star-outline';
                            break;
                        case PAGES.PagPerfil:
                            iconName = focused ? 'person' : 'person-outline';
                            break;
                        case PAGES.PagPesquisa:
                            iconName = focused ? 'search' : 'search-outline';
                            break;
                        default:
                            iconName = 'home-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#05043D',
                tabBarInactiveTintColor: 'gray',
                tabBarLabel: () => null, // Remove os títulos das abas
            })}
        >
            <Tab.Screen
                name={PAGES.PagInicial}
                component={PagInicialScreen}
                options={{ headerShown: true }} // Mostra o cabeçalho
            />
            <Tab.Screen
                name={PAGES.PagAbrigo}
                component={PagAbrigoScreen}
                options={{ headerShown: true }} // Mostra o cabeçalho
            />
            <Tab.Screen
                name={PAGES.PagPerfil}
                component={PagPerfilScreen}
                options={{ headerShown: true }} // Mostra o cabeçalho
            />
            <Tab.Screen
                name={PAGES.PagPesquisa}
                component={PagPesquisaScreen}
                options={{ headerShown: true }} // Mostra o cabeçalho
            />

        </Tab.Navigator>
    );
}

// Navegação das telas de autenticação
function Routes() {
    return (
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Signin"
                component={Signin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{ headerShown: false }} // Remove o cabeçalho do stack
            />
            <Stack.Screen
                name={PAGES.CadUsuario}
                component={CadUsuario} // Adicione a tela aqui
                options={{ headerShown: true }} // Opcional: Mostra o cabeçalho
            />
        </Stack.Navigator>
    );
}

export default Routes;

