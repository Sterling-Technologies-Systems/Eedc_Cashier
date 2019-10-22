

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";

import { Container, Header, Content, Form, Item, View, Left, Right, Title, Icon, Body } from 'native-base';
import {Input,Layout, Text, Button} from  'react-native-ui-kitten'

import QRCodeScanner from "react-native-qrcode-scanner";


import { BarCodeScanner } from 'expo-barcode-scanner';

class ScanBill extends Component {
  state = {
    inputValue: "",
    shown: true,
    fontLoaded: false
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("../../assets/fonts/Roboto/Roboto-Black.ttf"),
      Roboto_medium: require("../../assets/fonts/Roboto/Roboto-Medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  toggle = () => {
    this.setState({
      shown: !this.state.shown
    });
  };

  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error("An error occured", err)
    );
  };

  onPress = () => {
    console.warn("uncle im working");
  };

  onInputValueChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={QRCodeScanner.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{" "}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }


}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777"
  },
  textBold: {
    fontWeight: "500",
    color: "#000"
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)"
  },
  buttonTouchable: {
    padding: 16
  }
});

export default ScanBill;