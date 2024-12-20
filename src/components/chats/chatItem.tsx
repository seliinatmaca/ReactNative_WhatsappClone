import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const ChatItem: React.FC<ChatItemProps> = ({item}) => {
  return (
    <Pressable>
      <Text style={{fontSize: 30}}>chatItem</Text>
    </Pressable>
  );
};

export default ChatItem;
