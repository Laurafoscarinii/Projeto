import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';




export default function Signin() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Sua senha"
                    style={styles.input}
                    secureTextEntry={true} // Para esconder a senha
                />

                
                <Text style={styles.text}>Ainda não tem uma conta? </Text>

                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.buttonCad}>Cadastre-se</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PagInicial')}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>


            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000070',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingLeft: '5%' // Corrigido de 'paddingStart'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#fff"
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: '5%' // Corrigido de 'paddingStart' e 'paddingEnd'
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#000070',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 12, // Ajustado para 12 para corresponder ao paddingVertical do input
        marginTop: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    text:{
        color: '#a1a1a1',
        marginTop: 10,
        marginLeft: 40

    },
    buttonCad:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0F007D',
    },
    button1:{
        backgroundColor: '#fff',
        width: '24%',
        borderRadius: 10,
        paddingVertical: 10, // Ajustado para 12 para corresponder ao paddingVertical do input
        marginTop: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 194,
        marginTop: -28,
    },
});
