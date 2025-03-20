import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { IconCircleAddOutline } from './IconCircleAddOutline.component';

const meta = {
  title: 'Icons/IconCircleAddOutline',
  component: IconCircleAddOutline,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof IconCircleAddOutline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accessibilityLabel: 'Icône ajouter',
    color: '#000000',
    size: 24,
  },
};
