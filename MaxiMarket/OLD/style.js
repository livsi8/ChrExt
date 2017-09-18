import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "width": 300,
        "backgroundColor": "#ccc"
    },
    "h1": {
        "color": "white"
    },
    "container": {
        "zIndex": 9999999,
        "width": 300,
        "height": 300,
        "position": "absolute",
        "top": 50,
        "left": 300,
        "background": "blue"
    }
});