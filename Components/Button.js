import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MyButton = ({ onPress, iconName, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon name={iconName} size={20} color="gold" />
        <Text style={{ marginLeft: 5 }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
