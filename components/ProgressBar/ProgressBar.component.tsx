import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

interface ProgressBarProps {
  progress: number;
  height?: number;
  backgroundColor?: string;
  fillColor?: string;
  duration?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 4,
  backgroundColor = '#0000001a',
  fillColor = '#008859',
  duration = 300,
}) => {
  const animatedWidth = useRef(
    new Animated.Value((progress / 100) * 100)
  ).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: (progress / 100) * 100,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View
      style={{
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden',
        height,
        backgroundColor,
      }}
    >
      <Animated.View
        style={{
          height: '100%',
          borderRadius: 100,
          width: animatedWidth.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'],
          }),
          backgroundColor: fillColor,
        }}
      />
    </View>
  );
};

export default ProgressBar;
