import * as React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface IState {
  input: string;
}

export default class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      input: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.input}
          style={styles.input}
          placeholder="Write something here"
          onChangeText={this.handleTextbox}
        />
      </View>
    );
  }

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
