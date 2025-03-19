import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface IconCircleDeleteSolidProps {
  color?: string;
  size?: number;
  accessibilityLabel?: string;
}

export const IconCircleDeleteSolid = ({
  color,
  size = 24,
  accessibilityLabel,
}: IconCircleDeleteSolidProps) => {
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
      <G clipPath="url(#clip0_10323_55129)">
        <Path
          d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0z"
          fill={color || 'currentColor'}
        />
        <Path
          d="M15.828 9.172a1 1 0 00-1.707-.708L12 10.586 9.878 8.464A1 1 0 108.464 9.88L10.586 12l-2.122 2.121a1 1 0 001.414 1.415L12 13.414l2.121 2.122a1 1 0 101.414-1.415L13.414 12l2.121-2.121a1 1 0 00.293-.707z"
          fill="#FFFFFF"
        />
      </G>
    </Svg>
  );
};

export default IconCircleDeleteSolid;
