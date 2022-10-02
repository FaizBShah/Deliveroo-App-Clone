import React, { useLayoutEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView>
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          style={{
            width: 28,
            height: 28
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>Current Location</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen