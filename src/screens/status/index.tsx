import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultStyle} from '../../styles/defaultScreenStyle';

const Status: React.FC = () => {
  return (
    <View style={defaultStyle.container}>
      <Text style={{fontSize: 30}}>Status</Text>
    </View>
  );
};

export default Status;
