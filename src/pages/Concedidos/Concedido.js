import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useLayoutEffect } from 'react';

export default function Concedido({navigator}) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={styles.headerLeftContainer}>
                    <Image
                        source={require('../../assets/logo sem escrita.png')} 
                        style={styles.headerLogo}
                    />
                </View>
            ),
            title: '', 
        });
    }, [navigation]);

}

const styles= StyleSheet.create({

})