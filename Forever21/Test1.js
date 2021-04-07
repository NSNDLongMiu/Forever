import React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { add1, addPerson, removePerson } from "../actions/people";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onAddPeople() {
    this.props.dispatchAdd(this.state.count);
  }
  onRemove(per) {
    this.props.dispatchRemovePerson(per);
  }

  onChangeText(value) {
    this.setState({ value });
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.onAddPeople()}>
          <Text>Add</Text>
        </TouchableOpacity>
        <Text>{this.props.count}</Text>
        <TouchableOpacity onPress={() => this.onAddPeople()}>
          <Text>Increase 1</Text>
        </TouchableOpacity>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => this.onChangeText(text)}
          value={this.state.value}
        />
        {this.props.listUser?.map((el) => (
          <View>
            <Text>======</Text>
            <TouchableOpacity onPress={() => this.onRemove(el)}>
              <Text>Click to remove: {el}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

// lấy về
function mapStateToProps(store) {
  return {
    listUser: store.people.user,
    count: store.people.count
  };
}
// gửi đi
function mapDispatchToProps(dispatch) {
  return {
    dispatchAddPerson: (person) => dispatch(addPerson(person)),
    dispatchRemovePerson: (person) => dispatch(removePerson(person)),
    dispatchAdd: (add) => dispatch(add1(add))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
