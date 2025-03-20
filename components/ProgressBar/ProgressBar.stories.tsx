import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import ProgressBar from './ProgressBar.component';
import { Colors } from '../../theme';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 10,
    backgroundColor: Colors.light.background.grey,
    duration: 300,
    fillColor: Colors.light.buttons.primary,
    height: 5,
  },
};
