// .storybook/manager.js
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import logo from './icon.png';

addons.setConfig({
  theme: create({
    base: 'light',

    //Logo
    brandImage: logo,
    brandUrl: '',
    brandTarget: '_blank',
  }),
});
