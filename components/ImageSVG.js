import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

// const height = 80;
// const width = 317;
const ImageSVG = (props) => {
  const { width, height } = props.style;
  //   const textPosition = height;
  const xml = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"  viewBox="0 0 ${width} ${
    height + 3
  }"><g transform="translate(-29 -149)"><rect width="${width}" height="${
    height - 9
  }" rx="18" transform="translate(29 149)" fill="#575f76"/><rect width="25" height="25" rx="4" transform="translate(${
    width - 3
  } ${height + 118}) rotate(45)" fill="#575f76"/></g></svg>
    `;
  return (
    <View {...props} style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          position: "absolute",
          zIndex: 1,
          top: 0,
          bottom: 12,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          {props.text}
        </Text>
      {props.children}
      </View>
      <SvgXml xml={xml} width={width}></SvgXml>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },
});
export default ImageSVG;
