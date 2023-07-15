import { StyleSheet, Image } from 'react-native'
import React from 'react'

const PlaceHolderImage = require('../assets/images/background-image.png');

const ImageView = () => {
  return (
    <Image
	    style={{ width: "100%", borderRadius: 15 }}
        // Either approach can be used for source
		// source={require("../assets/images/background-image.png")}
		source={PlaceHolderImage}
	/>
  )
}

export default ImageView

const styles = StyleSheet.create({})