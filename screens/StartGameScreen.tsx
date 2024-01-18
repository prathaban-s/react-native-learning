import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/button/PrimaryButton";
const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    backgroundColor: "#36063c",
    elevation: 4, // android only
    shadowColor: "#000", // ios only
    shadowOffset: { width: 0, height: 2 }, // ios only
    shadowOpacity: 0.25, // ios only
    shadowRadius: 3.84, // ios only
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 50,
    borderBottomColor: "#ddb42f",
    borderBottomWidth: 2,
    color: "#ddb42f",
    marginVertical: 8,
    marginBottom: 16,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
