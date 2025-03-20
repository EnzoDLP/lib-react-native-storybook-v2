import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { IconEyesOutline } from './IconEyesOutline.component';

const meta = {
  title: 'Icons/IconEyesOutline',
  component: IconEyesOutline,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof IconEyesOutline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accessibilityLabel: 'Icône voir',
    color: '#000000',
    size: 24,
  },
};
