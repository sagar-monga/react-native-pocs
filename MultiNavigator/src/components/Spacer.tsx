import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    height?: number;
    width?: number
}

const Spacer = ({height = 0, width = 0}:Props) => {
  return (
    <View style={{height: height, width: width}}/>
  )
}

export default Spacer