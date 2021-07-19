import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import AsyncStorage from '@react-native-async-storage/async-storage'

import userImg from '../assets/cute_avatar.png'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
  const [username, setUsername] = useState<string>()

  useEffect(() => {
    async function loadStorageUsername() {
      const user = await AsyncStorage.getItem('@plantmanager:user')
      setUsername(user || '')
    }

    loadStorageUsername()
  })

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>
          Hello,
        </Text>
        <Text style={styles.username}>
          {username}
        </Text>
      </View>

      <Image source={userImg} style={styles.userImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  username: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
})