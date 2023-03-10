import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignIn from './src/screens/SignIn'

export default function App() {
  return (
    <SafeAreaView>
      <SignIn/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})