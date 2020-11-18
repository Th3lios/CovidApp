import React from 'react';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get("screen");

const scale = (value) => {
  const baseWidth = 414
  return (value * width)/baseWidth;
};

export default scale;