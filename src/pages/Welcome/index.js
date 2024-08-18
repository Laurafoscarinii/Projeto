import React from "react";
import { 
    View, 
    Text,
    StyleSheet, 
    Image ,
    TouchableOpacity
    } from "react-native";

import * as Animatable from 'react-native-animatable'

import {useNavigation } from '@react-navigation/native'

export default function Welcome(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>

        <View style={styles.containerLogo}>
        <Animatable.Image
            animation="flipInY"
            source={require('../../assets/logo.png')}
            style={{width: '100%'}}
            resizeMode="contain"
        />
        </View>

        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>

        <Text style={styles.title}>Bem vindo(a) ao Sistema de Monitoramento de Calamidades</Text>

        <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('Signin')}
        >
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        </Animatable.View>


        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#000070',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 12,
        color: '#fff',
        marginLeft: 9,
        textAlign:'center'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 26
    },
    buttonText:{
        fontSize: 18,
        color: '#000070',
        fontWeight: 'bold'
    }
})