import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
	size: string | number;
	vertical?: boolean;
};

const Spacer = ({ vertical = false, size }: Props) => {
	const defaultValue = "auto";
	return (
		<View
			style={{
				width: vertical ? defaultValue : size,
				height: vertical ? defaultValue : size,
			}}
		/>
	);
};

export default Spacer;

const styles = StyleSheet.create({});
