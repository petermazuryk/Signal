import { StyleSheet, TextInput, View, Pressable } from "react-native";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import React, { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    setMessage("");
  };
  const onPlusclicked = () => {
    return;
  };
  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusclicked();
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          name="emotsmile"
          size={24}
          color="black"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Сигнал"
          value={message}
          onChangeText={setMessage}
        />

        <Feather name="camera" size={24} color="black" />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={24}
          color="black"
        />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        <FontAwesome name="send" size={20} color="white" />
      </Pressable>
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  root: { flexDirection: "row", padding: 10 },
  input: { flex: 1, marginHorizontal: 5 },
  icon: {
    marginHorizontal: 5,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "lightgrey",
    marginRight: 10,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
});
