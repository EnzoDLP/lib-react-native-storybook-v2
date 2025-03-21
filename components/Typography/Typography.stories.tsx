import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import Typography from './Typography.component';
import { Colors } from '../../theme';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['large', 'medium', 'small', 'extraSmall'],
    },
    weight: {
      control: 'select',
      options: ['bold', 'semiBold', 'regular'],
    },
    color: {
      control: 'select',
      options: Object.keys(Colors.light.text),
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'small',
    weight: 'bold',
    color: 'error',
    children: 'Test',
  },
};
