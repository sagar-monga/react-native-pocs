import { StyleSheet, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import StyledIconButton from "./StyledIconButton";

type Props = {
	setShowOptions: Dispatch<SetStateAction<boolean>>;
	setIsVisible: Dispatch<SetStateAction<boolean>>;
};

const EditOptions = ({setShowOptions, setIsVisible}: Props) => {

	const onReset = () => {
		setShowOptions(false);
	};

	const onAddSticker = () => {
		setIsVisible(true);
	};

	const onSave = () => {};

	return (
		<View
			style={{
				width: "100%",
				flexDirection: "row",
				justifyContent: "space-evenly",
			}}
		>
			<StyledIconButton
				icon="refresh"
				text="Reset"
				style={{
					flexDirection: "column",
					height: 90,
					justifyContent: "space-between",
				}}
				iconSize={20}
				iconColor={"white"}
				onPress={onReset}
			/>
			<StyledIconButton
				icon="add"
				style={{
					width: 80,
					backgroundColor: "white",
					aspectRatio: 1,
					borderRadius: 50,
				}}
				border
				borderStyle={{ borderRadius: 50 }}
				iconSize={30}
				onPress={onAddSticker}
			/>
			<StyledIconButton
				icon="save-alt"
				text="Save"
				style={{
					flexDirection: "column",
					height: 90,
					justifyContent: "space-between",
				}}
				iconSize={20}
				iconColor={"white"}
				onPress={onSave}
			/>
		</View>
	);
};

export default EditOptions;

const styles = StyleSheet.create({});
