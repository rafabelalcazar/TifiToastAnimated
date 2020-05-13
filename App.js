import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageSVG from "./components/ImageSVG";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <View style={{ backgroundColor: "red",justifyContent:'center',alignItems:'center' }}> */}
      <View style={{width:'100%'}}>
        <ImageSVG style={{ width: 300, height: 60 }}>
          <Text style={{ position: "absolute", zIndex: 1, color: "white" }}>
            Fecha de nacimiento no valida ok
          </Text>
        </ImageSVG>
      </View>
      {/* </View> */}
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
