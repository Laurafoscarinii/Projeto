import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform, Switch } from 'react-native';

export default function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [cep, setCep] = useState('');
  const [familyComposition, setFamilyComposition] = useState(['', '', '']); // Para 3 membros

  // Situação Atual
  const [situation, setSituation] = useState({
    desalojado: false,
    desabrigado: false,
    atingido: false,
    abrigando: false,
    naoAtingido: false,
  });

  // Donativos
  const [donatives, setDonatives] = useState({
    colchao: false,
    roupaDeCama: false,
    travesseiro: false,
    kitCoberta: false,
    roupa: false,
    cestaBasica: false,
    kitHigiene: false,
    kitLimpeza: false,
    caixaLeite: false,
    fralda: false,
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajusta o comportamento conforme o sistema operacional
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.label}>Nome completo:</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>CPF:</Text>
            <TextInput
              style={styles.input}
              value={cpf}
              onChangeText={setCpf}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Data de Nascimento:</Text>
            <TextInput
              style={styles.input}
              value={birthDate}
              onChangeText={setBirthDate}
            />
          </View>
        </View>

        <Text style={styles.label}>Bairro:</Text>
        <TextInput
          style={styles.input}
          value={neighborhood}
          onChangeText={setNeighborhood}
        />

        <Text style={styles.label}>Rua:</Text>
        <TextInput
          style={styles.input}
          value={street}
          onChangeText={setStreet}
        />

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Número:</Text>
            <TextInput
              style={styles.input}
              value={number}
              onChangeText={setNumber}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>CEP:</Text>
            <TextInput
              style={styles.input}
              value={cep}
              onChangeText={setCep}
            />
          </View>
        </View>

        <Text style={styles.label}>Composição familiar:</Text>
        {familyComposition.map((member, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={member}
            onChangeText={(text) => {
              const updatedFamilyComposition = [...familyComposition];
              updatedFamilyComposition[index] = text;
              setFamilyComposition(updatedFamilyComposition);
            }}
          />
        ))}

        <TouchableOpacity style={styles.addButton} onPress={() => setFamilyComposition([...familyComposition, ''])}>
          <Text style={styles.addButtonText}>+ ADICIONAR</Text>
        </TouchableOpacity>

        {/* Situação Atual */}
        <Text style={styles.sectionTitle}>SITUAÇÃO ATUAL:</Text>
        <View style={styles.switchContainer}>
          <View style={styles.switchRow}>
            <Switch
              value={situation.desalojado}
              onValueChange={(newValue) => setSituation({ ...situation, desalojado: newValue })}
            />
            <Text style={styles.switchLabel}>Desalojado (ex: casa de familiares)</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={situation.desabrigado}
              onValueChange={(newValue) => setSituation({ ...situation, desabrigado: newValue })}
            />
            <Text style={styles.switchLabel}>Desabrigado (em abrigo público)</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={situation.atingido}
              onValueChange={(newValue) => setSituation({ ...situation, atingido: newValue })}
            />
            <Text style={styles.switchLabel}>Atingido, mas permanece em casa com danos parciais</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={situation.abrigando}
              onValueChange={(newValue) => setSituation({ ...situation, abrigando: newValue })}
            />
            <Text style={styles.switchLabel}>Está abrigando (familiar, amigo, etc.)</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={situation.naoAtingido}
              onValueChange={(newValue) => setSituation({ ...situation, naoAtingido: newValue })}
            />
            <Text style={styles.switchLabel}>Não atingido</Text>
          </View>
        </View>

        {/* Donativos */}
        <Text style={styles.sectionTitle}>DONATIVOS:</Text>
        <View style={styles.switchContainer}>
          <View style={styles.switchRow}>
            <Switch
              value={donatives.colchao}
              onValueChange={(newValue) => setDonatives({ ...donatives, colchao: newValue })}
            />
            <Text style={styles.switchLabel}>Colchão</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={donatives.roupaDeCama}
              onValueChange={(newValue) => setDonatives({ ...donatives, roupaDeCama: newValue })}
            />
            <Text style={styles.switchLabel}>Roupa de cama</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={donatives.travesseiro}
              onValueChange={(newValue) => setDonatives({ ...donatives, travesseiro: newValue })}
            />
            <Text style={styles.switchLabel}>Travesseiro</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={donatives.kitCoberta}
              onValueChange={(newValue) => setDonatives({ ...donatives, kitCoberta: newValue })}
            />
            <Text style={styles.switchLabel}>Kit coberta</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={donatives.roupa}
              onValueChange={(newValue) => setDonatives({ ...donatives, roupa: newValue })}
            />
            <Text style={styles.switchLabel}>Roupa</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={donatives.cestaBasica}
              onValueChange={(newValue) => setDonatives({ ...donatives, cestaBasica: newValue })}
            />
            <Text style={styles.switchLabel}>Cesta Básica</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={donatives.kitHigiene}
              onValueChange={(newValue) => setDonatives({ ...donatives, kitHigiene: newValue })}
            />
            <Text style={styles.switchLabel}>Kit higiene</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={donatives.kitLimpeza}
              onValueChange={(newValue) => setDonatives({ ...donatives, kitLimpeza: newValue })}
            />
            <Text style={styles.switchLabel}>Kit limpeza</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={donatives.caixaLeite}
              onValueChange={(newValue) => setDonatives({ ...donatives, caixaLeite: newValue })}
            />
            <Text style={styles.switchLabel}>Cx. de leite (12)</Text>
          </View>
          <View style={styles.switchRow}>
            <Switch
              value={donatives.fralda}
              onValueChange={(newValue) => setDonatives({ ...donatives, fralda: newValue })}
            />
            <Text style={styles.switchLabel}>Fralda</Text>
          </View>
        </View>

        {/* Botões */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>AGUARDAR VISITA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ENTREGUE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05043D', // Fundo azul escuro
  },
  scrollView: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#2D3A5A', // Fundo dos inputs
    color: '#FFFFFF',
    fontSize: 16,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#0073e6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  switchContainer: {
    marginBottom: 20,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchLabel: {
    color: '#FFFFFF',
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0074D9',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
