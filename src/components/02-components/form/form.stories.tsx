import type { Meta, StoryObj } from '@storybook/react';
import ExposedForm from './form'; // Make sure to import the correct path

const meta: Meta<typeof ExposedForm> = {
  title: 'Components/Form',
  component: ExposedForm,
};

export default meta;

export const Staff: StoryObj<typeof ExposedForm> = {
  args: {
    controls: [
      {
        id: 'department',
        label: 'Department',
        name: 'department',
        options: [
          {
            id: '1',
            label: 'Education',
          },
          {
            id: '2',
            label: 'Administration',
          },
        ],
      },
    ],
  },
};
