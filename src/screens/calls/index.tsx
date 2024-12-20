import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultStyle} from '../../styles/defaultScreenStyle';
import {SafeAreaView} from 'react-native-safe-area-context';

const Calls: React.FC = () => {
  return (
    <SafeAreaView style={defaultStyle.safeArea}>
      <View style={defaultStyle.container}>
        <Text style={{fontSize: 30}}>Calls</Text>
      </View>
    </SafeAreaView>
  );
};

export default Calls;
