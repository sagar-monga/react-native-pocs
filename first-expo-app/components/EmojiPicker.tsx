import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren, ReactNode } from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
	isVisible: boolean;
	onClose: () => void;
};

const EmojiPicker = ({ children, isVisible, onClose }: PropsWithChildren<Props>) => {
	return (
		<Modal transparent={true} visible={isVisible} animationType="slide">
			<View
				style={{
					height: "25%",
					width: "100%",
					backgroundColor: "#25292e",
					borderTopRightRadius: 18,
					borderTopLeftRadius: 18,
					position: "absolute",
					bottom: 0,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						height: "15%",
						backgroundColor: "#464C55",
						borderTopRightRadius: 10,
						borderTopLeftRadius: 10,
						paddingHorizontal: 20,
					}}
				>
					<Text style={{color:'white', fontSize: 16}}>Choose a sticker</Text>
					<Pressable onPress={onClose}>
						<MaterialIcons name="close" color="#fff" size={22} />
					</Pressable>
				</View>
				{children}
			</View>
		</Modal>
	);
};

export default EmojiPicker;

const styles = StyleSheet.create({});
