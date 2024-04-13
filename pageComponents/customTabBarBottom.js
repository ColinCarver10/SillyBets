import React, { Component } from "react";
import { TabBarBottom } from "react-navigation";
import {
  View,
  Dimensions,
  TouchableOpacity,
  DeviceEventEmitter,
} from "react-native";

const { width, height } = Dimensions.get("window");

class CustomTabBarBottomChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  startEmit() {
    DeviceEventEmitter.emit("showPlusModel", "123");
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.plusTouchButton}
        onPress={() => this.startEmit()}
      />
    );
  }
}

const CustomTabBarBottom = (props) => {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <TabBarBottom {...props} />
    </View>
  );
};

const styles = {
  plusContainer: {
    position: "absolute",
    top: 1,
    bottom: 0,
    left: "50%",
    zIndex: 999,
    marginLeft: -0.1 * width,
    width: 0.2 * width,
    height: height * 0.08 < 65 ? 65 : height * 0.08,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  plusTouchButton: {
    height: height * 0.08 < 65 ? 45 : height * 0.089 / 13,
    width: height * 0.08 < 65 ? 45 : height * 0.089 / 13,
    borderRadius: 50,
    backgroundColor: "#fb7299",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default CustomTabBarBottom;
