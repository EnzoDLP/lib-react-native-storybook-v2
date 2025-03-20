import React, { PropsWithChildren } from 'react';
import { Pressable } from 'react-native';

interface ButtonIconProps {
  onPress: () => void;
  accessibilityLabel: string;
  accessibilityHint: string;
}

export const ButtonIcon = ({
  onPress,
  accessibilityLabel,
  accessibilityHint,
  children,
}: PropsWithChildren<ButtonIconProps>) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessibilityHint={accessibilityHint}
    >
      {children}
    </Pressable>
  );
};
