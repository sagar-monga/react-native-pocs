import {
	FlexStyle,
	OpaqueColorValue,
	Pressable,
	StyleSheet,
	Text,
	TextStyle,
	View,
	ViewStyle,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
	text?: string;
	icon?: keyof typeof MaterialIcons.glyphMap;
	border?: boolean;
	style?: ViewStyle;
	textStyle?: TextStyle;
	onPress?: () => void;
	borderStyle?: ViewStyle;
	iconSize?: number;
	iconColor?: string | OpaqueColorValue;
};

const StyledIconButton = ({
	border = false,
	icon,
	style,
	text,
	textStyle,
	borderStyle,
	onPress = () => {},
	iconSize = 12,
	iconColor = 'black',
}: Props) => {
	return (
		<Pressable
			style={[
				border
					? { borderColor: "yellow", borderWidth: 5, borderRadius: 15 }
					: null,
				borderStyle,
			]}
			onPress={onPress}
		>
			<View
				style={[
					{
						padding: 20,
						margin: 5,
						backgroundColor: "#25292e",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 5,
					},
					style,
				]}
			>
				{icon && (
					<MaterialIcons
						name={icon}
						size={iconSize}
						color={iconColor}
						style={icon && text ? { marginHorizontal: 10 } : null}
					/>
				)}
				{text && <Text style={[{ color: "white" }, textStyle]}>{text}</Text>}
			</View>
		</Pressable>
	);
};

export default StyledIconButton;

const styles = StyleSheet.create({});
