import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const SmartWorkoutIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="none"
      />
      <g transform="translate(4, 4) scale(0.65)">
        {/* Brain */}
        <path
          d="M12 3C7.58 3 4 6.58 4 11c0 2.52 1.17 4.76 3 6.23V19h2v-1h2v1h2v-1h2v1h2v-1.77c1.83-1.47 3-3.71 3-6.23 0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
          fill="currentColor"
        />
        {/* Dumbbells */}
        <path
          d="M3 14V10H2V7h1V3h2v4h1v3H5v4H3zm16 0V10h-1V7h1V3h2v4h1v3h-1v4h-2z"
          fill="currentColor"
        />
      </g>
    </SvgIcon>
  );
};

export default SmartWorkoutIcon;
