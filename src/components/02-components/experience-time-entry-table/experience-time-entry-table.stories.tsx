import type { Meta, StoryObj } from '@storybook/react';

import ExperienceTimeEntriesTable from './experience-time-entry-table';

const meta: Meta<typeof ExperienceTimeEntriesTable> = {
  title: 'Components/Experiences Time Entry Table',
  component: ExperienceTimeEntriesTable,
};

export default meta;

const description = `<p>
  Researching Walmart’s in the Kern county area will help locate how many stores
  will gift funding for the Ronald McDonald House located in Bakersfield.
</p>`;

const learningOutcomes = `<p>
  Deserunt mollit incididunt esse reprehenderit tempor deserunt officia culpa
  ipsum id exercitation consequat. Irure pariatur est ea eiusmod duis quis veniam
  deserunt. Nisi commodo laboris anim mollit dolor. Reprehenderit sint nostrud
  enim qui.
</p>`;

export const Default: StoryObj<typeof ExperienceTimeEntriesTable> = {
  args: {
    url: '#',
    totalItems: 6,
    itemsPerPage: 4,
    currentPage: 1,
    items: [
      {
        id: '1',
        state: 'submitted',
        date: '08/30/2022 6:00pm to 8:00pm',
        calculatedHours: 3,
        description,
        learningOutcomes,
      },
      {
        id: '2',
        state: 'submitted',
        date: '08/30/2022 6:00pm to 8:00pm',
        calculatedHours: 3,
        description,
        learningOutcomes,
      },
      {
        id: '3',
        state: 'published',
        date: '08/30/2022 6:00pm to 8:00pm',
        calculatedHours: 3,
        description,
        learningOutcomes,
      },
      {
        id: '4',
        state: 'declined',
        date: '08/30/2022 6:00pm to 8:00pm',
        calculatedHours: 3,
        description,
        learningOutcomes,
      },
      {
        id: '5',
        state: 'declined',
        date: '08/30/2022 6:00pm to 8:00pm',
        calculatedHours: 3,
        description,
        learningOutcomes,
      },
      {
        id: '6',
        state: 'submitted',
        date: '08/30/2022 6:00pm to 8:00pm',
        calculatedHours: 3,
        description,
        learningOutcomes,
      },
    ],
  },
};

export const NoContent: StoryObj<typeof ExperienceTimeEntriesTable> = {
  args: {
    url: '#',
    totalItems: 6,
    itemsPerPage: 4,
    currentPage: 1,
  },
};
