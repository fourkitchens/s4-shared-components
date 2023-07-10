import type { Meta, StoryObj } from '@storybook/react';

import TimeLogTable from './time-log-table';

const meta: Meta<typeof TimeLogTable> = {
  title: 'Components/Time Log Table',
  component: TimeLogTable,
};

const goalsText = `
Researching Walmart’s in the Kern county area will help locate how many stores will gift funding for the Ronald McDonald House located in Bakersfield.
`;

const LearningText = `
  Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt. 
  Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.
`;

export default meta;

export const Default: StoryObj<typeof TimeLogTable> = {
  args: {
    timeLogInfo: [
      {
        dateTime: '08/31/2022 6:00pm to 8:00pm',
        hour: 2,
        goals: goalsText,
        learningOutcomes: LearningText,
        status: 'Submitted',
      },
      {
        dateTime: '08/31/2022 6:00pm to 8:00pm',
        hour: 2,
        goals: goalsText,
        learningOutcomes: LearningText,
        status: 'Submitted',
      },
    ],
    cta: '/logtime',
  },
};
