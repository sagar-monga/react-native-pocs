import { StyleSheet, View } from "react-native";
import React from "react";
import StyledIconButton from "./StyledIconButton";
import ImageView from "./ImageView";


const HomeScreen = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#25292e",
				justifyContent: "center",
				alignItems: "center",
				paddingHorizontal: 40,
			}}
		>
            <ImageView />
			<StyledIconButton
				text={"Choose a Photo"}
				icon={"photo"}
				border
				style={{backgroundColor: 'white'}}
                textStyle={{color: 'black'}}
			/>
			<StyledIconButton text={"Use this Photo"} style={{backgroundColor: 'red'}}/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
