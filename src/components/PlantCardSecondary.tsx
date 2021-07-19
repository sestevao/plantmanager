import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text, View, Animated } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface PlantProps extends RectButtonProps {
  data: {
    name: string,
    photo: string,
    hour: string,
  }
  handleRemove: () => void
}

export function PlantCardSecondary({ data, handleRemove, ...rest }: PlantProps) {


  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.buttonRemove} onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton style={styles.container} {...rest}>
        <SvgFromUri uri={data.photo} width={50} height={50} />

        <Text style={styles.title}>
          {data.name}
        </Text>

        <View style={styles.details}>
          <Text style={styles.timeLabel}>
            Water at
          </Text>
          <Text style={styles.time}>
            {data.hour}
          </Text>
        </View>
      </RectButton>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.shape,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 5,
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginLeft: 10,
  },
  details: {
    alignItems: 'center',
    marginRight: 6,
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light,
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark,
  },
  buttonRemove: {
    width: 100,
    height: 65,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 15,
    marginTop: 15,
    right: 20,
    paddingLeft: 15
  },
})