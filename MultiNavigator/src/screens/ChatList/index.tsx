import Header from '@components/Header';
import {IconTypes} from '@components/Icon';
import IconButton from '@components/IconButton';
import SearchBar from '@components/SearchBar';
import {dummyUsers} from '@mocks/users';
import {ChatStackParamList} from '@navigation/ParamList';
import {ScreenRouter} from '@navigation/Routes';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from '@theme/colors';
import {globalStyles} from '@theme/styles';
import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ChatItem from './components/ChatItem';
import Seperator from './components/Seperator';

type NavProps = StackNavigationProp<ChatStackParamList, ScreenRouter.ChatList>;

const ChatList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<NavProps>();

  const renderLeftHeader = () => {
    return (
      <IconButton
        icon={IconTypes.Drawer}
        color={Colors.white}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    );
  };

  const renderRightHeader = () => {
    return <IconButton icon={IconTypes.Filter} color={Colors.white} />;
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };

  return (
    <View style={globalStyles.baseContainer}>
      <Header
        title={ScreenRouter.Chat}
        leftItem={renderLeftHeader}
        rightItem={renderRightHeader}
      />

      <FlatList
        nestedScrollEnabled
        data={dummyUsers}
        renderItem={({item, index}) => <ChatItem user={item} index={index} />}
        ItemSeparatorComponent={() => <Seperator />}
        ListHeaderComponent={<SearchBar />}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  parentContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftItem: {
    height: '100%',
    width: 60,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  titleStyle: {
    color: Colors.white,
    fontSize: 20,
  },
  rightItem: {
    height: '100%',
    width: 60,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
