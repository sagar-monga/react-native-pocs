import DrawerContentRow from '@components/DrawerContentRow';
import {IconTypes} from '@components/Icon';
import ProfileDrawerHeader from '@navigation/drawer/profile';
import {DrawerParamList} from '@navigation/ParamList';
import {ScreenRouter} from '@navigation/Routes';
import {
  DrawerContentScrollView,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '@theme/colors';
import {AvatarSize, currentUser} from '@utils/constants';
import React from 'react';

type NavProps = DrawerNavigationProp<DrawerParamList, ScreenRouter.DrawerHome>;

/**
 * Custom Drawer Content Component
 * @returns
 */
const DrawerContent = () => {
  const navigation = useNavigation<NavProps>();
  return (
    <DrawerContentScrollView>
      <ProfileDrawerHeader
        onPress={() => {}}
        avatarSize={AvatarSize.small}
        avatarColor={Colors.grape}
        name={currentUser.name}
        designation={currentUser.designation}
      />
      <DrawerContentRow
        onPress={() => {}}
        iconName={IconTypes.Tick}
        iconColor={Colors.goldenRod}
        label={'Available'}
      />
      <DrawerContentRow
        onPress={() => {}}
        iconName={IconTypes.Location}
        label={'Set Work Location'}
      />
      <DrawerContentRow
        onPress={() => {}}
        iconName={IconTypes.Write}
        label={'Set Status Message'}
      />
      <DrawerContentRow
        onPress={() => {}}
        iconName={IconTypes.Activity}
        label={'Notifications'}
      />
      <DrawerContentRow
        onPress={() => {}}
        iconName={IconTypes.Plus}
        label={'Add Account'}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
