import React, { useState } from "react";
import { LabelDefault, InputDefault } from "./style";
import { StyleSheet, Text, View } from "react-native";

export default ({ textLabel, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [valueInput, setValueInput ] = useState("");

  return (
    <View>
      <LabelDefault style={[isFocused && { color: "#6B00B0" }]}>
        {textLabel}
      </LabelDefault>
      
      <InputDefault
        style={[isFocused && { borderColor: "#6B00B0", color: "#6B00B0" }]}
        defaultValue={valueInput}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onChangeText={valueInput => setValueInput(valueInput)}
        returnKeyType="next"
      />
    </View>
  );
};
