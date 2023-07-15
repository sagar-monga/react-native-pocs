import { StyleSheet, Image } from 'react-native'
import React from 'react'

const PlaceHolderImage = require('../assets/images/background-image.png');

const ImageView = () => {
  return (
    <Image
	    style={{ width: 356, height:552, borderRadius: 15 }}
      // Either approach can be used for source
      source={PlaceHolderImage}
      // source={require("../assets/images/background-image.png")}
	/>
  )
}

export default ImageView
