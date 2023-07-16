import { StyleSheet, Image, View, ImageSourcePropType, Pressable } from "react-native";
import React from "react";

type Props = {
	imageSize: number;
	selectedEmoji: any;
};

const EmojiSticker = ({ imageSize, selectedEmoji }: Props) => {
	return (
		<Pressable style={{ top: -350 }}>
			<Image
				source={selectedEmoji}
				style={{ height: imageSize, width: imageSize }}
			/>
		</Pressable>
	);
};

export default EmojiSticker;

const styles = StyleSheet.create({});
