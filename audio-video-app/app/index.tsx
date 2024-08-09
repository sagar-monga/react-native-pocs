import { Link } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";
import { Routes } from "./routes/Routes";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text style={{ padding: 40 }}>Hello</Text>
			<Pressable onPress={() => {}}>
				<Link
					href={Routes.Content}
					style={{
						backgroundColor: "blue",
						color: "white",
						paddingHorizontal: 15,
						paddingVertical: 10,
						borderRadius: 50,
					}}
				>
					View Content
				</Link>
			</Pressable>
		</View>
	);
}
