import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface IconFileCheckSolidProps {
  color?: string;
  size?: number;
  accessibilityLabel?: string;
}

export const IconFileCheckSolid = ({
  color,
  size = 24,
  accessibilityLabel,
}: IconFileCheckSolidProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={accessibilityLabel ? undefined : true}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="image"
    >
      <G clipPath="url(#clip0_41104_1135)">
        <Path
          d="M14 7V.46c.925.35 1.765.891 2.465 1.59l3.484 3.486A6.953 6.953 0 0121.539 8H15a1 1 0 01-1-1zm8 3.485V19a5.005 5.005 0 01-5 5H7a5.006 5.006 0 01-5-5V5a5.006 5.006 0 015-5h4.515c.163 0 .324.013.485.024V7a3 3 0 003 3h6.976c.01.161.024.322.024.485zm-5.276 3.826a1 1 0 00-1.413-.035l-3.6 3.431a1 1 0 01-1.456-.04l-1.59-1.414a1 1 0 00-1.331 1.494l1.544 1.374a3 3 0 004.226.017l3.585-3.414a1 1 0 00.035-1.413z"
          fill={color || 'currentColor'}
        />
      </G>
    </Svg>
  );
};

export default IconFileCheckSolid;
