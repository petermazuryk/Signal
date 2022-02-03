import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/core";

const UserItem = ({ user }: any) => {
  const navigation = useNavigation();

  const onPress = () => {};
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default UserItem;
