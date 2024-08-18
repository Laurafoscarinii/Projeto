import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Cadastro() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Para fazer seu cadastro preencha os campos a seguir:</Text>
            </Animatable.View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.label}>Nome Completo</Text>
                    <TextInput placeholder="" style={styles.input} />

                    <Text style={styles.label}>CPF</Text>
                    <TextInput placeholder="" style={styles.input} />

                    <Text style={styles.label}>Data de Nascimento</Text>
                    <TextInput placeholder="" style={styles.input} />

                    <Text style={styles.label}>Email</Text>
                    <TextInput placeholder="" style={styles.input} />

                    <Text style={styles.label}>Telefone</Text>
                    <TextInput placeholder="" style={styles.input} />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput placeholder="" secureTextEntry={true} style={styles.input} />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('TabNavigator')}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                    
                </Animatable.View>
            </ScrollView>
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
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#fff"
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    containerForm: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: '5%',
        paddingTop: 20,
    },
    label: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5,
        color: '#000'
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 20,
        fontSize: 16
    },
    button: {
        backgroundColor: '#000070',
        borderRadius: 50,
        paddingVertical: 12,
        width: '60%',
        alignSelf: 'center',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
});