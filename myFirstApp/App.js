import React from 'react';
import { StyleSheet, View, Button, TextInput, Switch } from 'react-native';
import CheckBox from 'react-native-checkbox'

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      prendido: false,
      inputText: "TEXTO EJEMPLO"
    }
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  onPressFunction() {

    alert("Presinó el botón!");

  }

  render() {
    return (
      <View style={styles.container}>

        <Button
          title="Botón!"
          onPress={
            () => {
              this.onPressFunction()
            }
          } />

        <CheckBox
          label="CheckBox!!"
          checked={this.state.prendido}
          onChange={
            (checked) => {
              this.setState({ prendido: !this.state.prendido })
            }
          }
        />

        <TextInput
          placeholder="Escribe:"
          onChangeText={
            (text) => {
              this.setState({ inputText: text })
            }
          }
          value={this.state.inputText}
        />

        <Switch
          value={this.state.prendido}
          onValueChange={
            (checked) => {
              this.setState({ prendido: checked })
            }
          }
        />

        <Switch
          value={!this.state.prendido}
        />

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
});
