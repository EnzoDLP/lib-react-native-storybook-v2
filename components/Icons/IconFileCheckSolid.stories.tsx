import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { IconFileCheckSolid } from './IconFileCheckSolid.component';

const meta = {
  title: 'Icons/IconFileCheckSolid',
  component: IconFileCheckSolid,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof IconFileCheckSolid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accessibilityLabel: 'Icône fichier validé',
    color: '#000000',
    size: 24,
  },
};
