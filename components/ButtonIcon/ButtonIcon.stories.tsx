import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { View } from 'react-native';
import { ButtonIcon } from './ButtonIcon.component';
import IconEyesOutline from '../Icons/IconEyesOutline.component';

const meta = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ButtonIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onPress: action('onPress'),
    accessibilityLabel: 'Label',
    accessibilityHint: 'Hint',
    children: <IconEyesOutline />,
  },
};
