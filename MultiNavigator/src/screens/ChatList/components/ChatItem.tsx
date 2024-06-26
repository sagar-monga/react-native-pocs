import {Avatar} from '@components/Avatar/Avatar';
import Spacer from '@components/Spacer';
import {User} from '@models/User';
import {ChatStackParamList} from '@navigation/ParamList';
import {ScreenRouter} from '@navigation/Routes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from '@theme/colors';
import {globalStyles} from '@theme/styles';
import {Utils} from '@utils/utils';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  user: User;
  index: number;
};

type ChatNavigation = StackNavigationProp<
  ChatStackParamList,
  ScreenRouter.ChatList
>;

const ChatItem = ({user, index}: Props) => {
  const navigation = useNavigation<ChatNavigation>();

  const goToChat = () => {
    navigation.navigate(ScreenRouter.Chat);
  };

  return (
    <Pressable
      style={styles.parentContainer}
      onPress={goToChat}
      android_ripple={{
        color: Colors.darkGray,
      }}>
      <Avatar>
        <Text style={styles.avatarText}>
          {Utils.getUserInitials(user.name)}
        </Text>
      </Avatar>
      <Spacer width={20} />
      <View style={styles.textContainer}>
        <Text style={[globalStyles.baseText, styles.name]}>{`${index + 1}: ${user.name}`}</Text>
        <Text numberOfLines={2} style={globalStyles.baseText}>
          {user.message}
        </Text>
      </View>
      <View>
        <Text style={globalStyles.baseText}>{user.time}</Text>
      </View>
    </Pressable>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: Colors.black,
    padding: 20,
    flexDirection: 'row',
  },
  avatar: {
    backgroundColor: 'darkorange',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {fontSize: 18},
  textContainer: {flex: 1},
  name: {fontWeight: 'bold', fontSize: 16},
});
