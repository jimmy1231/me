import React from "react";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      This is the layout component
      <div>
        {children}
      </div>
    </div>
  )
}
