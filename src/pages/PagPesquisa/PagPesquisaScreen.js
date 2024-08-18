import * as React from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';

export default function PagPesquisaScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={styles.headerLeftContainer}>
                    <Image
                        source={require('../../assets/logo sem escrita.png')} // Ajuste o caminho conforme necessário
                        style={styles.logo}
                    />
                </View>
            ),
            title: '', // Remove o título
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Pesquisar CPF"
                placeholderTextColor="#fff"
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>BENEFÍCIO CONCEDIDO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>NÃO CONCEDIDO</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button2}>
                <Text style={styles.button3}>AGUARDANDO VISITA</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logoContainer: {
        marginBottom: 20,
    },
    logoText: {
        fontSize: 24,
        color: '#00008B',
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        width: '100%',
        borderColor: '#00008B',
        borderWidth: 1,
        borderRadius: 25, // Borda arredondada
        paddingHorizontal: 20,
        color: '#00008B',
        marginBottom: 35,
        backgroundColor: '#00008B',
        marginTop: '-98%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '100%',
    },
    button: {
        flex: 1,
        marginHorizontal: 8,
        borderRadius: 7,
        backgroundColor: '#00008B',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerLeftContainer: {
        marginLeft: 15, // Ajuste conforme necessário
    },
    logo: {
        width: 60, // Ajuste o tamanho conforme necessário
        height: 49,
    },
    button3: {
        alignItems: 'center',
        backgroundColor: '#00008B',
        color: '#FFF'
    },
    button2: {
        backgroundColor: '#00000',
        marginHorizontal: 7,
        borderRadius: 0,
        backgroundColor: '#00008B',
        paddingVertical: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '8%'
    }
});
