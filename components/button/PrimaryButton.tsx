import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

interface Props {
  children: React.ReactNode;
  onPress?: () => void;
}
const PrimaryButton = ({ children, onPress }: Props) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  container: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, // android only
    shadowColor: "#000", // ios only
    shadowOffset: { width: 0, height: 2 }, // ios only
    shadowOpacity: 0.25, // ios only
    shadowRadius: 3.84, // ios only
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
