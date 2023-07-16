import { FlatList, Pressable, StyleSheet, Image} from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'

type Props = {
    data: any[];
    onSelect: Dispatch<SetStateAction<any>>;
    onCloseModal: () => void;
}

const EmojiList = ({data, onCloseModal, onSelect}:Props) => {
  return (
    <FlatList
    horizontal
    data={data}
    contentContainerStyle={{
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    }}
    renderItem={({ item }) => (
        <Pressable style={{ marginRight: 20 }} onPress={() => {
            onSelect(item);
            onCloseModal();
        } }>
            <Image
                source={item}
                resizeMode="cover"
                style={{ height: 100, aspectRatio: 1 }} />
        </Pressable>
    )}
/>
  )
}

export default EmojiList

const styles = StyleSheet.create({})