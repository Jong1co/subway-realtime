// src/components/SvgIcon.tsx
import React from "react";
import { SvgProps } from "react-native-svg";

import * as Icons from "../../../assets/svg";

type IconProps = SvgProps & {
  name: keyof typeof Icons;
  size?: number;
};

export function SvgIcon({
  name,
  fill = "black",
  width: _width,
  height: _height,
  size,
  ...props
}: IconProps) {
  const Comp = Icons[name];

  const width = _width ?? size;
  const height = _height ?? size;
  const sizeProps = {
    ...(width !== undefined ? { width } : {}),
    ...(height !== undefined ? { height } : {}),
  };

  return <Comp {...props} fill={fill} {...sizeProps} />;
}
