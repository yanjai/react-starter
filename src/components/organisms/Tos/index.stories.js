import React from 'react';
import Tos from './';
import { StorybookWithStore } from 'components';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Organisms/Tos',
  component: Tos,
  componentSubtitle: 'Handy status label',
  decorators: [StorybookWithStore, StoryRouter()],
};

export const _default = () => {
  return <Tos />;
};
