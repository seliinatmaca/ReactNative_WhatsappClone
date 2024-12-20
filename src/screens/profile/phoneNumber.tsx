import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {defaultStyle} from '../../styles/defaultScreenStyle';
import PhoneInput from '../../components/uı/phoneInput';

const PhoneNumber: React.FC = () => {
  return (
    <SafeAreaView style={defaultStyle.container}>
      <View style={defaultStyle.container}>
        <Text style={{fontSize: 16, textAlign: 'center', marginTop: 20}}>
          Please confirm your country code and enter your phone number
        </Text>
        <PhoneInput />
      </View>
    </SafeAreaView>
  );
};

export default PhoneNumber;
