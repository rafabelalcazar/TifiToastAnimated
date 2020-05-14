import React, { useRef, useEffect, useState } from "react";
import { Text, View, StyleSheet, Animated, Dimensions } from "react-native";
import { SvgXml } from "react-native-svg";

const heightScreen = Dimensions.get("window").height;
const widthtScreen = Dimensions.get("window").width;
export const TifiToast = (props) => {
  const { width, height } = props.style;
  const { color } = props;

  const [isLive, setIsLive] = useState(true);

  // Animation value
  const valueY = useRef(new Animated.Value(heightScreen)).current;
  useEffect(() => {
    isLive?
    Animated.timing(valueY, {
      toValue: heightScreen*0.4,
      duration: 500,
    }).start(() => hideToast()):null
  },[]);

  const hideToast = () => {
    Animated.timing(valueY, {
      toValue: heightScreen,
      duration: 1000,
      delay: 3000,
    }).start(() => setIsLive(false));
  };

  // Toast dinamic shape
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"  viewBox="0 0 ${width} ${
    height + 3
  }"><g transform="translate(-29 -149)"><rect width="${width}" height="${
    height - 9
  }" rx="18" transform="translate(29 149)" fill=${color}/><rect width="25" height="25" rx="4" transform="translate(${
    width - 3
  } ${height + 118}) rotate(45)" fill=${color}/></g></svg>
    `;
  return isLive ? (
    <Animated.View
      {...props}
      style={[styles.container, { transform: [{ translateY: valueY }] }]}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.text}</Text>
        {props.children}
      </View>
      <SvgXml xml={xml} width={width}></SvgXml>
    </Animated.View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    opacity: 0.8,
    position: "absolute",
    width: widthtScreen,
  },
  textContainer: {
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    top: 0,
    bottom: 12,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

