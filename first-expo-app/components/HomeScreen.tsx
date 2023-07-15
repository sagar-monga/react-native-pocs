import { StyleSheet, View } from "react-native";
import React from "react";
import StyledIconButton from "./StyledIconButton";
import ImageView from "./ImageView";
import Spacer from "./Spacer";


const HomeScreen = () => {
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
            <ImageView />
            <Spacer size={40}/>
			<StyledIconButton
				text={"Choose a Photo"}
				icon={"photo"}
				border
				style={{backgroundColor: 'white'}}
                textStyle={{color: 'black'}}
			/>
            <Spacer size={20} />
			<StyledIconButton text={"Use this Photo"} style={{backgroundColor: 'red'}}/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
