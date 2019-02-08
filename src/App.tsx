import * as React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class App extends React.Component {
  state = {
    textbox: " ",
  };
  handleTextbox = () => {
    this.setState({ Textbox: Text });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Write something here"
          onChangeText={this.handleTextbox}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5B5655",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  input: {
    marginBottom: 40,
    paddingLeft: 15,
    height: 40,
    borderRadius: 20,
    width: "90%",
    backgroundColor: "#FFFFFF",
  },
});
