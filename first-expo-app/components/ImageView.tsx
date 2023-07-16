import { StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

type Props = {
  src: ImageSourcePropType;
}

const ImageView = ({src}: Props) => {
  return (
    <Image
	    style={{ width: 356, height:552, borderRadius: 15 }}
      // Either approach can be used for source
      source={src}
      // source={require("../assets/images/background-image.png")}
	/>
  )
}

export default ImageView
