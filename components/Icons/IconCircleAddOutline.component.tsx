import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface IconCircleAddOutlineProps {
  color?: string;
  size?: number;
  accessibilityLabel?: string;
}

export const IconCircleAddOutline = ({
  color,
  size = 24,
  accessibilityLabel,
}: IconCircleAddOutlineProps) => {
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
      <G clipPath="url(#clip0_19238_203083)">
        <Path
          d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10zm5-10a1 1 0 01-1 1h-3v3a1 1 0 01-2 0v-3H8a1 1 0 010-2h3V8a1 1 0 012 0v3h3a1 1 0 011 1z"
          fill={color || 'currentColor'}
        />
      </G>
    </Svg>
  );
};

export default IconCircleAddOutline;
