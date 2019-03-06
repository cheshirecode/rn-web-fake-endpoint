import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { IconToggle } from "react-native-material-ui";
const uri = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"/></svg>`;

export default class Address extends Component {
  state = {
    isShowingAddress: false
  };

  onPress = () => {
    this.setState({
      isShowingAddress: !this.state.isShowingAddress
    });
  };

  render() {
    const { street, suite, city, zipcode, ...a } = this.props.address || {};
    // console.log(a);

    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        {this.state.isShowingAddress ? (
          <View style={styles.text}>
            <Text>
              {suite} {street}
            </Text>
            <Text>
              {city} {zipcode}
            </Text>
          </View>
        ) : (
          <View style={styles.addressWrapper}>
            {Platform.OS === "web" ? (
              <Image
                accessibilityLabel="address"
                source={{ uri }}
                resizeMode="contain"
                style={styles.address}
              />
            ) : (
              <IconToggle name="address" iconSet="AntDesign" size={2} />
            )}
            <Text>(click to show)</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // margin: 3,
    // width: 20,
    // height: 60
  },
  text: {
    // alignSelf: "flex-end",
    width: 200,
    // backgroundColor: 'red',
    flexWrap: "wrap",
    // justifyContent: "flex-end",
    flex: 1,
    flexDirection: "row"
  },
  addressWrapper: {
    flexWrap: "wrap",
    // justifyContent: "flex-end",
    flex: 1,
    flexDirection: "row"
  },
  address: {
    height: 20,
    width: 20
  }
});
