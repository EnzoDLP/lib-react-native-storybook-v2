import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Get Started',
          'Foundation',
          'Components',
          'Icons',
        ],
        method: 'alphabetical',
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
