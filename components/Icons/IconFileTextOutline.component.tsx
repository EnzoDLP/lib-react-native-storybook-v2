import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface IconFileTextOutlineProps {
  color?: string;
  size?: number;
  accessibilityLabel?: string;
}

export const IconFileTextOutline = ({
  color,
  size = 24,
  accessibilityLabel,
}: IconFileTextOutlineProps) => {
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
      <G clipPath="url(#clip0_41098_9886)">
        <Path
          d="M17 14a1 1 0 01-1 1H8a1 1 0 110-2h8a1 1 0 011 1zm-4 3H8a1 1 0 000 2h5a1 1 0 100-2zm9-6.515V19a5.006 5.006 0 01-5 5H7a5.006 5.006 0 01-5-5V5a5.006 5.006 0 015-5h4.515a6.958 6.958 0 014.95 2.05l3.484 3.486A6.949 6.949 0 0122 10.485zm-6.949-7.021a5.008 5.008 0 00-1.05-.78V7a1 1 0 001 1h4.315a4.98 4.98 0 00-.78-1.05L15.05 3.464zm4.95 7.021c0-.165-.033-.323-.048-.485H15a3 3 0 01-3-3V2.047c-.162-.015-.32-.047-.485-.047H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3v-8.515z"
          fill={color || 'currentColor'}
        />
      </G>
    </Svg>
  );
};

export default IconFileTextOutline;
