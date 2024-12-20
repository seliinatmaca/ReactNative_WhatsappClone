import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TabIconProps} from '../../models/ui/tabIcon';
import {CALLS, CAMERA, CHATS, SETTINGS, STATUS} from '../../utils/routes';

const TabIcon: React.FC<TabIconProps> = ({size, color, focused, route}) => {
  console.log(route.name);
  switch (route.name) {
    case STATUS:
      return (
        <Image
          source={require('../../assets/icons/statusOutline.png')}
          style={{width: size, height: size}}
        />
      );
    case CALLS:
      return (
        <Image
          source={require('../../assets/icons/callsOutline.png')}
          style={{width: size, height: size, resizeMode: 'contain'}}
        />
      );
    case CAMERA:
      return (
        <Image
          source={require('../../assets/icons/cameraOutline.png')}
          style={{width: size, height: size, resizeMode: 'contain'}}
        />
      );
    case CHATS:
      return (
        <Image
          source={require('../../assets/icons/chats.png')}
          style={{width: size, height: size, resizeMode: 'contain'}}
        />
      );
    case SETTINGS:
      return (
        <Image
          source={require('../../assets/icons/settings.png')}
          style={{width: size, height: size, resizeMode: 'contain'}}
        />
      );

    default:
      <Image
        source={require('../../assets/icons/statusOutline.png')}
        style={{width: size, height: size, resizeMode: 'contain'}}
      />;
  }
};

export default TabIcon;
