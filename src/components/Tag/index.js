import React, { useState } from "react";
import RootTagContext from "react-native/Libraries/ReactNative/RootTagContext";
import { Tag, TextTag } from "./styles";

export default ({ textTag, ...rest }) => {
  const [isActive, setIsActive] = useState(false);

  var arrColors = [
    "#A70000",
    "#26D037",
    "#E5EA0A",
    "#EA830A",
    "#0AEA7E",
    "#0FA4B8",
    "#4F0FB8",
    "#E70EEC",
  ];
  var colorItem = arrColors[Math.floor(Math.random() * arrColors.length)];

  return (
    <Tag
      style={[isActive == true && { borderColor: colorItem }]}
      onPress={() =>
        isActive == true ? setIsActive(false) : setIsActive(true)
      }
    >
      <TextTag style={[isActive && { color: colorItem }]}>{textTag}</TextTag>
    </Tag>
  );
};
