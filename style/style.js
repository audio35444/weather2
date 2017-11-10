import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "td": {
        "verticalAlign": "middle",
        "textAlign": "center"
    },
    "th": {
        "verticalAlign": "middle",
        "textAlign": "center"
    },
    "td:first-of-type": {
        "height": 200,
        "width": 250
    },
    "td:first-of-type > div": {
        "height": 200,
        "width": 250
    },
    "svg": {
        "height": 150,
        "width": 150
    },
    "search-bar": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "textAlign": "center",
        "display": "flex",
        "flexDirection": "row"
    },
    "search-bar input": {
        "width": "100%",
        "border": "2px solid #ddd",
        "borderTopLeftRadius": 8,
        "borderBottomLeftRadius": 8
    },
    "video-item img": {
        "maxWidth": 64
    },
    "video-detail details": {
        "marginTop": 10,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "border": "1px solid #ddd",
        "borderRadius": 4
    },
    "list-group-item": {
        "cursor": "pointer"
    },
    "list-group-item:hover": {
        "backgroundColor": "#5aaca7"
    },
    "list-group-item:hover h5": {
        "color": "#f0f9f8"
    },
    "list-group-item:active": {
        "backgroundColor": "#306660"
    }
});