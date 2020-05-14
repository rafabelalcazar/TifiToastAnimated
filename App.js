import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {TifiToast} from "./components/TifiToast";

export default function App() {
  const [newAlert,setNewAlert]= useState(false)
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <View style={{ width: "100%" }}> */}
      {
        newAlert?<TifiToast style={{ width: 300, height: 80 }} text="Fecha no valida" color="#2d3754" />:null
      }
        
      {/* </View> */}
        <Button title='Mostrar toast' onPress={()=>setNewAlert(!newAlert)}/>
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
