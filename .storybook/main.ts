import { StorybookConfig } from '@storybook/react-native-web-vite';

const main: StorybookConfig = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
  ],

  framework: {
    name: '@storybook/react-native-web-vite',
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen',
  },
};

export default main;
