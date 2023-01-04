import React from "react";

const KV: React.FC<{ name: string, children?: React.ReactNode }> = ({ name, children }) => {
  return (
    <div><strong>{name}:</strong> {children}</div>
  )
}

export default KV
