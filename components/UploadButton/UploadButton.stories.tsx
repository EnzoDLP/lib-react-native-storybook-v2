import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { View } from 'react-native';
import { UploadButton } from './UploadButton.component';

const meta = {
  title: 'Components/UploadButton',
  component: UploadButton,
  decorators: [
    (Story) => (
      <View style={{ padding: 16, maxWidth: 360 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof UploadButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Ajouter un document',
    subTitle: 'PNG, JPG, PDF - taille du fichier max : 10Mo',
    onPress: action('onPress'),
  },
};

export const Loading: Story = {
  args: {
    title: 'Ajouter un document',
    subTitle: 'PNG, JPG, PDF - taille du fichier max : 10Mo',
    loading: {
      title: 'Lorem ipsum',
      onStop: action('onStop'),
    },
    onPress: action('onPress'),
  },
};

export const Loaded: Story = {
  args: {
    title: 'Ajouter un document',
    subTitle: 'PNG, JPG, PDF - taille du fichier max : 10Mo',
    loaded: {
      title: 'Lorem ipsum',
      size: '5.4MB',
      onCheck: action('onStop'),
      onDelete: action('onDelete'),
    },
    onPress: action('onPress'),
  },
};

export const Error: Story = {
  args: {
    title: 'Ajouter un document',
    subTitle: 'PNG, JPG, PDF - taille du fichier max : 10Mo',
    error: {
      title: 'Erreur de chargement',
      subTitle:
        'Formats acceptés : PNG, JPG, PDF - Taille maximum du document : 10Mo',
    },
    onPress: action('onPress'),
  },
};
