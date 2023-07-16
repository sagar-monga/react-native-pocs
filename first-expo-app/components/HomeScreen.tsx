import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ImageView from "./ImageView";
import Spacer from "./Spacer";
import EditOptions from "./EditOptions";
import FooterContainer from "./FooterContainer";
import EmojiPicker from "./EmojiPicker";
import EmojiList from "./EmojiList";
import EmojiSticker from "./EmojiSticker";

const PlaceHolderImage = require("../assets/images/background-image.png");

const HomeScreen = () => {
	const [image, setImage] = useState(PlaceHolderImage);
	const [showOptions, setShowOptions] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [emoji] = useState([
		require("../assets/images/emoji1.png"),
		require("../assets/images/emoji2.png"),
		require("../assets/images/emoji3.png"),
		require("../assets/images/emoji4.png"),
		require("../assets/images/emoji5.png"),
		require("../assets/images/emoji6.png"),
	]);

	const [selectedEmoji, setSelectedEmoji] = useState<any>(null);

	return (
		<View
			style={{
				// maxWidth for rendering proper UI on web, can use conditional styling too.
				maxWidth: 500,
				width: "100%",
				height: "100%",
				backgroundColor: "#25292e",
				justifyContent: "center",
				alignItems: "center",
				paddingHorizontal: 40,
			}}
		>
			<Spacer size={40} />
			<ImageView src={image} />
			<Spacer size={40} />
			{showOptions ? (
				<EditOptions
					setShowOptions={setShowOptions}
					setIsVisible={setIsModalVisible}
				/>
			) : (
				<FooterContainer setShowOptions={setShowOptions} setImage={setImage} />
			)}
			{/* //TODO: Add support for multiple stickers */}
			{selectedEmoji !== null && (
				<EmojiSticker imageSize={40} selectedEmoji={selectedEmoji} />
			)}
			<EmojiPicker
				isVisible={isModalVisible}
				onClose={() => {
					setIsModalVisible(false);
				}}
			>
				<EmojiList
					data={emoji}
					onSelect={setSelectedEmoji}
					onCloseModal={() => setIsModalVisible(false)}
				/>
			</EmojiPicker>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
