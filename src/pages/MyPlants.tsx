import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Image, View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { formatDistance } from 'date-fns/esm'
import { pt } from 'date-fns/locale'

import { loadPlant, PlantProps } from '../libs/storage'
import { Header } from '../components/Header'
import { Load } from '../components/Load'
import { PlantCardSecondary } from '../components/PlantCardSecondary'

import waterdrop from '../assets/waterdrop.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>()
  const [loading, setLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState<string>()

  const navigation = useNavigation()

  useEffect(() => {
    async function loadStorageData() {
      const plantsStorage = await loadPlant()

      const nextTime = formatDistance(
        new Date(plantsStorage[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      )

      setNextWatered(`Regue a sua ${plantsStorage[0].name} daqui a ${nextTime}.`)
      setMyPlants(plantsStorage)
      setLoading(false)
    }

    loadStorageData()
  }, [])

  if (loading)
    return <Load />


  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterdrop} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>{nextWatered}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Próximas regadas</Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary data={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  spotlight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
  },
  spotlightImage: {
    width: 60,
    height: 60,
  },
  spotlightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
  },
  plants: {
    flex: 1,
    width: '100%',
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20,
  },
})