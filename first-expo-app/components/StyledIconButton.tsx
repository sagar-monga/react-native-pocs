import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
	text: string;
	icon?: keyof typeof MaterialIcons.glyphMap;
	border?: boolean;
	style?: ViewStyle;
    textStyle?: TextStyle;
};

const StyledIconButton = ({ border = false, icon, style, text, textStyle}: Props) => {
	return (
		<Pressable
			style={[
				{
					width: "100%",
					flexDirection: "row",
				},
				border
                ? { borderColor: "yellow", borderWidth: 5, borderRadius: 15 }
                : null,
			]}
            >
			<View
				style={[
                    {
                        padding: 20,
						margin: 5,
						backgroundColor: "#25292e",
						flex: 1,
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 5,
					},
					style,
				]}
			>
				{icon && (
					<MaterialIcons name={icon} style={{ marginHorizontal: 10 }} />
				)}
				<Text style={[{color: 'white'}, textStyle]}>{text}</Text>
			</View>
		</Pressable>
	);
};

export default StyledIconButton;

const styles = StyleSheet.create({});
