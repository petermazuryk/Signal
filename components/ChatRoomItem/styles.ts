import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  badgeContainer: {
    backgroundColor: "blue",
    height: 20,
    width: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 55,
    top: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: { fontWeight: "bold", fontSize: 18, marginBottom: 3 },
  text: {
    color: "gray",
  },
});

export default styles;
