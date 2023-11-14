import Avatar from '@components/Avatar/Avatar';
import Icon, {IconTypes} from '@components/Icon';
import Spacer from '@components/Spacer';
import {Colors} from '@theme/colors';
import {globalStyles} from '@theme/styles';
import {AvatarSize} from '@utils/constants';
import {Utils} from '@utils/utils';
import React from 'react';
import {ColorValue, Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  onPress: () => void;
  avatarSize: AvatarSize;
  avatarColor: ColorValue;
  name: string;
  designation: string;
};

const ProfileDrawerHeader = ({
  avatarColor,
  avatarSize,
  designation,
  name,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
      android_ripple={{
        color: Colors.darkGray,
      }}>
      <Avatar
        containerStyle={{
          height: avatarSize,
          width: avatarSize,
          backgroundColor: avatarColor,
        }}>
        <Text style={[globalStyles.baseText, styles.initials]}>
          {Utils.getUserInitials(name)}
        </Text>
      </Avatar>
      <Spacer width={10} />
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[globalStyles.baseText, styles.name]}>{name}</Text>
          <Icon name={IconTypes.RightArrow} />
        </View>
        <Text style={[globalStyles.baseText, styles.designation]}>
          {designation}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProfileDrawerHeader;

const styles = StyleSheet.create({
  button: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  initials: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
  },
  designation: {
    fontSize: 14,
  },
});
