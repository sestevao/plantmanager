import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'

import wateringImg from '../assets/watering.png'
import { Button } from '../components/Button'
import colors from '../styles/colors'

export function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerencie {'\n'} suas plantas {'\n'} de forma fácil</Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subtitle}>Não esqueça mais de regar as suas plantas.{'\n'}Nós cuidamos de lembrar sempre que precisar.</Text>

      <Button title="Avancar"></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  image: {
    width: 292,
    height: 284,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
})