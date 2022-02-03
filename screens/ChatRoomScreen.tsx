import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import React from "react";
import Message from "../components/Message";
import chatRoomsData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";
import { useRoute, useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
const ChatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  console.warn("Press", route.params?.id);
  navigation.setOptions({ title: "Elon" });
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomsData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
};

export default ChatRoomScreen;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    margin: "auto",
  },
});
