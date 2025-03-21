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
  args: {
    title: 'Ajouter un document',
    subTitle: 'PNG, JPG, PDF - taille du fichier max : 10Mo',
    onDeleteFile: action('onDeleteFile'),
    onStopLoading: action('onStopLoading'),
    onPressUpload: action('onPressUpload'),
  },
} satisfies Meta<typeof UploadButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    isError: { control: false },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    fileName: 'Lorem ipsum',
  },
};

export const Loaded: Story = {
  args: {
    fileName: 'Lorem ipsum',
    fileSize: '5.4MB',
    onCheckFile: action('onCheckFile'),
  },
};

export const Error: Story = {
  args: {
    isError: true,
    errorTitle: 'Erreur de chargement',
    errorSubtitle:
      'Formats acceptés : PNG, JPG, PDF - Taille maximum du document : 10Mo',
  },
};
