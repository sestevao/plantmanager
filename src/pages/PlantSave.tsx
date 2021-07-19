import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Platform, Alert, ScrollView } from 'react-native'
import { SvgFromUri } from 'react-native-svg'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { useRoute, useNavigation } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { isBefore, format } from 'date-fns'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'

import { Button } from '../components/Button'
import { PlantProps, savePlant } from '../libs/storage'

import waterdrop from '../assets/waterdrop.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface Params {
  plant: PlantProps
}

export function PlantSave() {
  const [selectedDateTime, setSeletedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

  const navigation = useNavigation()
  const route = useRoute()
  const { plant } = route.params as Params

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState)
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSeletedDateTime(new Date())
      return Alert.alert("Choose a time in the future! ⏰")
    }

    if (dateTime) {
      setSeletedDateTime(dateTime)
      }
  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker((oldState) => !oldState);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      })

      navigation.navigate('Confirmation', {
        title: 'All very well',
        subtitle: 'Rest assured that we will always remind you to take care of your little plant with a lot of love.',
        buttonTitle: 'Thank you very much :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      })

    } catch {
      Alert.alert("Unable to save! 😢")
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.plantInfo}>
          <SvgFromUri uri={plant.photo} width={200} height={200} />

          <Text style={styles.plantName}>
            {plant.name}
          </Text>

          <Text style={styles.plantAbout}>
            {plant.about}
          </Text>
        </View>

        <View style={styles.controller}>
          <View style={styles.tipContainer}>
            <Image source={waterdrop} style={styles.tipImage} />

            <Text style={styles.tipText}>
              {plant.water_tips}
            </Text>
          </View>

          <Text style={styles.alertLabel}>
            Choose the best time to be remembered:
          </Text>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === 'android' && (
            <TouchableOpacity
              style={styles.dateTimePickerButton}
              onPress={handleOpenDateTimePickerForAndroid}
            >
              <Text style={styles.dateTimePickerText}>
                {`Change ${format(selectedDateTime, "HH:mm")}`}
              </Text>
            </TouchableOpacity>
          )}

          <Button title="Register Plant" onPress={handleSave} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  },
  plantInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  plantName: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.heading,
    textAlign: 'center',
    marginTop: 10,
  },
  controller: {
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: getBottomSpace() || 20,
  },
  tipContainer: {
    backgroundColor: colors.blue_light,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    borderRadius: 20,
    padding: 20,
    bottom: 60,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.text,
    color: colors.blue,
    textAlign: 'justify',
    marginLeft: 20,
  },
  alertLabel: {
    fontSize: 12,
    fontFamily: fonts.complement,
    color: colors.heading,
    textAlign: 'center',
    marginBottom: 5,
  },
  dateTimePickerButton: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 5,
  },
  dateTimePickerText: {
    fontSize: 22,
    fontFamily: fonts.text,
    color: colors.heading,
  },
})