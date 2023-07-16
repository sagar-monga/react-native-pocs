import { Alert, StyleSheet, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import StyledIconButton from "./StyledIconButton";
import Spacer from "./Spacer";
import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";

type Props = {
	setImage: Dispatch<SetStateAction<any>>;
	setShowOptions: Dispatch<SetStateAction<boolean>>;
};

const FooterContainer = ({ setImage, setShowOptions }: Props) => {
	// try to select video too. see how <Image> handles videos.
	const selectImage = async () => {
		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
			allowsMultipleSelection: false,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
			setShowOptions(true);
		} else {
			Alert.alert("Library Explorer", "You did not select any image!");
		}
	};

	const useThisImage = () => {
		setShowOptions(true);
	};
	return (
		<View style={{ width: "100%" }}>
			<StyledIconButton
				text={"Choose a Photo"}
				icon={"photo"}
				border
				style={{ backgroundColor: "white" }}
				textStyle={{ color: "black" }}
				onPress={selectImage}
				borderStyle={{ backgroundColor: "red" }}
			/>
			<Spacer size={20} />
			<StyledIconButton
				text={"Use this Photo"}
				style={{ width: "100%" }}
				onPress={useThisImage}
			/>
		</View>
	);
};

export default FooterContainer;

const styles = StyleSheet.create({});
