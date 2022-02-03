import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
// import { Auth } from "aws-amplify";
import UserItem from "../components/UserItem";
import Users from "../assets/dummy-data/Users";

export default function UsersScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={Users}
        renderItem={({ item }) => <UserItem user={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  logout: {
    backgroundColor: "red",
    margin: 10,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
