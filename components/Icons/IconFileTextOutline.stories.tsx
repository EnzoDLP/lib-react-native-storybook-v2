import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { IconFileTextOutline } from './IconFileTextOutline.component';

const meta = {
  title: 'Icons/IconFileTextOutline',
  component: IconFileTextOutline,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof IconFileTextOutline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accessibilityLabel: 'Icône fichier',
    color: '#000000',
    size: 24,
  },
};
