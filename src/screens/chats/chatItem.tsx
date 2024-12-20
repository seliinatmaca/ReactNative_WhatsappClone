import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ChatItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>chatItem</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatItem;
