import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { View } from 'react-native';
import { MySecondButton } from './MySecondButton.component';

const meta = {
  title: 'MySecondButton',
  component: MySecondButton,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof MySecondButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Test',
    onPress: action('onPress'),
  },
};
