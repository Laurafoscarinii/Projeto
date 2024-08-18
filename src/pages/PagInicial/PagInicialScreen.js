import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useLayoutEffect } from 'react';

export default function PagInicialScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={styles.headerLeftContainer}>
                    <Image
                        source={require('../../assets/logo sem escrita.png')} // Certifique-se de que o caminho está correto
                        style={styles.headerLogo}
                    />
                </View>
            ),
            title: '', // Remove o título do cabeçalho
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/logo sem escrita.png')} // Certifique-se de que o caminho está correto
                    style={styles.logo}
                />
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('CadUsuario')} // Navegação para CadUsuario
                >
                    <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>CADASTRAR USUÁRIO</Text>
                    </View>
                    <Text style={styles.plusIcon}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('PagAbrigo')} // Navegação para PagAbrigo
                >
                    <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>CADASTRAR ABRIGO</Text>
                    </View>
                    <Text style={styles.plusIcon}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerLeftContainer: {
        marginLeft: 15, // Ajuste conforme necessário
    },
    headerLogo: {
        width: 60, // Ajuste o tamanho conforme necessário
        height: 49,
    },
    logoContainer: {
        marginBottom: 30, // Ajusta a margem inferior do logo centralizado
    },
    logo: {
        width: 300, // Ajuste o tamanho conforme necessário
        height: 300,
        backgroundColor: '#FFFFFF',
    },
    buttonsContainer: {
        width: '80%',
        marginTop: -10, // Ajuste se necessário
    },
    button: {
        backgroundColor: '#000070',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    plusIcon: {
        fontSize: 40,
        color: '#FFFFFF',
        marginTop: 1,
    },
});
