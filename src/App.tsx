import * as React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

interface IState {
  input: string;
  chatHistory: ReadonlyArray<string>;
}

export default class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      input: "",
      chatHistory: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state.chatHistory)}</Text>
        <TextInput
          value={this.state.input}
          style={styles.input}
          placeholder="Write something here"
          onChangeText={this.handleTextbox}
        />
        <Button onPress={this.onSubmit} title="Send" />
      </View>
    );
  }

  onSubmit = () => {
    const chatHistory = this.state.chatHistory.concat(this.state.input);
    this.setState({ chatHistory, input: "" });
  };

  handleTextbox = (input: string) => {
    this.setState({ input });
  };
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
