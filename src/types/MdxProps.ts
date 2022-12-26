import React from "react";
export default interface MdxProps<D> {
  data: D;
  children: React.ReactNode;
}
