import { View, Text, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function PerfilUsuario() {
  // Captura os parâmetros passados na URL/Rota
  const { id, nome } = useLocalSearchParams();
  const identificador = Array.isArray(id) ? id[0] : id;

  return (
    <>
      <Stack.Screen options={{ title: `Usuário ${identificador}` }} />
      <View style={styles.conteudo}>
        <Text style={styles.texto}>ID do Usuário: {id}</Text>
        <Text style={styles.texto}>Nome do Usuário: {nome}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
});
