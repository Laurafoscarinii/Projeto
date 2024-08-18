import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';

export default function PagAbrigoScreen({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={styles.headerLeftContainer}>
                    <Image
                        source={require('../../assets/logo sem escrita.png')} // Certifique-se de que o caminho está correto
                        style={styles.logo}
                    />
                </View>
            ),
            title: '', 
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            {/* O conteúdo da página vai aqui */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerLeftContainer: {
        marginLeft: 15, 
    },
    logo: {
        width: 60, // Ajuste o tamanho conforme necessário
        height: 49,
        marginLeft: "1%"
    },
});




