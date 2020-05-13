import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageSVG from "./components/ImageSVG";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={{ width: "100%" }}>
        <ImageSVG style={{ width: 300, height: 80 }} text="Fecha no valida" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
