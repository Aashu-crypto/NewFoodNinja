import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { screen } from '../../redux/slice/screenNameSlice'
const SignUpProcess2 = () => {
    const dispatch = useDispatch()
  return (
    <View style ={styles.container}>
        <View>
      <Text>Geo Location ....will set up later</Text>
      </View>
      <Pressable onPress = {()=>dispatch(screen('HOME'))}>
        <Text>Diaptch to main Screen</Text>
      </Pressable>
    </View>
  )
}

export default SignUpProcess2

const styles = StyleSheet.create({
    container :{
        flex:1
    }
})