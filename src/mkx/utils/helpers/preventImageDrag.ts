import React from "react";

export const preventImageDrag = {
  onMouseDown: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (event.preventDefault) event.preventDefault();
  },
};
