import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { IconCircleDeleteSolid } from './IconCircleDeleteSolid.component';

const meta = {
  title: 'Icons/IconCircleDeleteSolid',
  component: IconCircleDeleteSolid,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof IconCircleDeleteSolid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accessibilityLabel: 'Icône supprimer',
    color: '#000000',
    size: 24,
  },
};
