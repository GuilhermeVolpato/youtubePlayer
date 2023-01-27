import { StyleSheet } from "react-native";

export const VIDEO_HEIGHT = 250;
export const SCREEN_SPACE = 20;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  player:{
    width: "100%",
    height: VIDEO_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 48,
    borderRadius: 10,
  },
});
