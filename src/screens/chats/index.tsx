import React from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';
import {defaultStyle} from '../../styles/defaultScreenStyle';
import {chats} from '../../utils/mockData';
import ChatItem from '../../components/chats/chatItem';

const Chats: React.FC = () => {
  return (
    <SafeAreaView style={defaultStyle.safeArea}>
      <View style={defaultStyle.container}>
        <FlatList data={chats} renderItem={({item}) => <ChatItem />} />
      </View>
    </SafeAreaView>
  );
};

export default Chats;
