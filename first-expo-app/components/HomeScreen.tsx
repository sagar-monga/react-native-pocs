import { Alert, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import StyledIconButton from "./StyledIconButton";
import ImageView from "./ImageView";
import Spacer from "./Spacer";
import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";

const PlaceHolderImage = require('../assets/images/background-image.png');

const HomeScreen = () => {
    const [image, setImage] = useState(PlaceHolderImage);

    // try to select video too. see how <Image> handles videos.
    const selectImage = async () => {
        const result = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
            allowsMultipleSelection: false,
        });

        if(!result.canceled) {
            setImage(result.assets[0].uri);
        }
        else {
            Alert.alert('Library Explorer', 'You did not select any image!');
        }
    }

	return (
		<View
			style={{
                // maxWidth for rendering proper UI on web, can use conditional styling too.
                maxWidth: 500,
				width: '100%',
                height: '100%',
				backgroundColor: "#25292e",
				justifyContent: "center",
				alignItems: "center",
				paddingHorizontal: 40,
			}}
		>
            <Spacer size={40}/>
            <ImageView src={image}/>
            <Spacer size={40}/>
			<StyledIconButton
				text={"Choose a Photo"}
				icon={"photo"}
				border
				style={{backgroundColor: 'white'}}
                textStyle={{color: 'black'}}
                onPress={selectImage}
			/>
            <Spacer size={20} />
			<StyledIconButton text={"Use this Photo"}/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
