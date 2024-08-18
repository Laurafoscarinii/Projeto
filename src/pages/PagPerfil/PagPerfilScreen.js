import * as React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useLayoutEffect } from 'react';
import { launchImageLibrary } from 'react-native-image-picker'; // Certifique-se de que a importação está correta

export default function PagPerfilScreen({ navigation }) {
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
            title: '', // Remove o título
        });
    }, [navigation]);

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Natália Korsack');
    const [cpf, setCpf] = useState('055.106.690-39');
    const [birthdate, setBirthdate] = useState('07/01/2007');
    const [email, setEmail] = useState('nataliakorsack@gmail.com');
    const [phone, setPhone] = useState('51 994153084');
    const [department, setDepartment] = useState('Assistente Social (CRAS)');
    const [profileImage, setProfileImage] = useState('https://img.icons8.com/ios-filled/100/000000/user.png'); // Imagem padrão

    const handleSave = () => {
        // Lógica de salvar os dados
        setIsEditing(false);
    };

    const pickImage = () => {
        launchImageLibrary({ mediaType: 'photo', quality: 1 }, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else {
                setProfileImage(response.assets[0].uri); // Atualiza a imagem do perfil
            }
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MEU PERFIL</Text>
            <TouchableOpacity style={styles.profileIconContainer} onPress={pickImage}>
                <Image source={{ uri: profileImage }} style={styles.profileIcon} />
            </TouchableOpacity>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>NOME:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    editable={isEditing}
                />

                <Text style={styles.label}>CPF:</Text>
                <TextInput
                    style={styles.input}
                    value={cpf}
                    onChangeText={setCpf}
                    editable={isEditing}
                />

                <Text style={styles.label}>D. DE NASCIMENTO:</Text>
                <TextInput
                    style={styles.input}
                    value={birthdate}
                    onChangeText={setBirthdate}
                    editable={isEditing}
                />

                <Text style={styles.label}>E-MAIL:</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    editable={isEditing}
                />

                <Text style={styles.label}>TELEFONE:</Text>
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    editable={isEditing}
                />

                <Text style={styles.label}>DEPARTAMENTO:</Text>
                <TextInput
                    style={styles.input}
                    value={department}
                    onChangeText={setDepartment}
                    editable={isEditing}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => isEditing ? handleSave() : setIsEditing(true)}>
                <Text style={styles.buttonText}>{isEditing ? 'Salvar' : 'Editar perfil'}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff', // Ajuste o fundo para se adaptar aos inputs
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    profileIconContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileIcon: {
        width: 100,
        color: '#fff',
        height: 100,
        borderRadius: 50,
        backgroundColor: '#fff', // Cor de fundo para a área do perfil
    },
    infoContainer: {
        width: '80%', // Definir a largura dos inputs
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#05043D',
        fontWeight: 'bold',
    },
    input: {
        fontSize: 16,
        color: '#fff',
        borderWidth: 1,
        borderColor: '#05043D',
        borderTopLeftRadius: 10, // Ajuste o valor conforme necessário
        borderTopRightRadius: 10, // Ajuste o valor conforme necessário
        borderBottomLeftRadius: 10, // Sem arredondamento
        borderBottomRightRadius: 10, // Sem arredondamento
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#000070',
        paddingVertical: 5,
    },
    button: {
        backgroundColor: '#000070',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
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
});