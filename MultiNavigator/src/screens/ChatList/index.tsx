import AvatarButton from '@components/Avatar/AvatarButton';
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
import {AvatarSize} from '@utils/constants';
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  withTiming,
} from 'react-native-reanimated';
import ChatItem from './components/ChatItem';
import Seperator from './components/Seperator';

type NavProps = StackNavigationProp<ChatStackParamList, ScreenRouter.ChatList>;

const ChatList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<NavProps>();

  const scrollRef = useAnimatedRef<Animated.FlatList>();
  const scrollHandler = useScrollViewOffset(scrollRef);

  const renderLeftHeader = () => {
    return (
      <AvatarButton
        containerStyle={{
          height: AvatarSize.small,
          width: AvatarSize.small,
          backgroundColor: Colors.grape,
        }}
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer);
        }}>
        <Text style={[styles.avatarText]}>{'CU'}</Text>
      </AvatarButton>
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

  const scrollToTop = () => {
    scrollRef.current.scrollToOffset({offset: 0, animated: true});
  };

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: scrollHandler.value > 800 ? withTiming(1) : withTiming(0),
      // opacity: interpolate(scrollHandler.value, [800, 0], [1, 0]),
    };
  });

  return (
    <View style={globalStyles.baseContainer}>
      <Header
        title={ScreenRouter.Chat}
        leftItem={renderLeftHeader}
        rightItem={renderRightHeader}
      />

      <FlatList
        nestedScrollEnabled
        // ref={listRef}
        ref={scrollRef}
        data={dummyUsers}
        renderItem={({item, index}) => <ChatItem user={item} index={index} />}
        ItemSeparatorComponent={() => <Seperator />}
        ListHeaderComponent={<SearchBar />}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      <Animated.View style={[buttonAnimatedStyle]}>
        <IconButton
          icon={IconTypes.UpArrow}
          color={Colors.white}
          onPress={() => scrollToTop()}
          buttonStyle={[styles.scrollToTopButton]}
        />
      </Animated.View>
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
  avatarText: {fontSize: 16},
  scrollToTopButton: {
    backgroundColor: Colors.grape,
    position: 'absolute',
    padding: 15,
    borderRadius: 50,
    bottom: 20,
    right: 20,
    flex: 1,
  },
});
