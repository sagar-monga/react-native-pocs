import {globalStyles} from '@theme/styles';
import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import ChatItem from '../components/ChatItem';
import {dummyUsers} from '../dummyData';
import SearchBar from '@components/SearchBar';
import { Colors } from '@theme/colors';

const ChatList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };

  return (
    <View style={globalStyles.baseContainer}>
      <FlatList
        nestedScrollEnabled
        data={dummyUsers}
        renderItem={({item, index}) => <ChatItem user={item} index={index} />}
        ItemSeparatorComponent={() => <View style={{height: 0, borderBottomColor: Colors.white, borderBottomWidth: StyleSheet.hairlineWidth}}/>}
        ListHeaderComponent={<SearchBar />}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
