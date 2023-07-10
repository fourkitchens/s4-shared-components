import type { Meta, StoryObj } from '@storybook/react';

import ExperiencePage from './experience-page';

const meta: Meta<typeof ExperiencePage> = {
  title: 'Components/Experience Page',
  component: ExperiencePage,
};

const goalsText = `
Researching Walmart’s in the Kern county area will help locate how many stores will gift funding for the Ronald McDonald House located in Bakersfield.
`;

const LearningText = `
  Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt. 
  Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.
`;

const dummyText = `
  Lorem ipsum dolor sit amet consectetur. Risus vitae pretium eget at integer consectetur parturient tincidunt. 
  Platea sapien vel laoreet pellentesque urna. Sollicitudin sem sed sed eu porttitor ornare elit.
`;

export default meta;

export const Default: StoryObj<typeof ExperiencePage> = {
  args: {
    experienceName: 'Experience Name',
    url: '#',
    opportunityName: 'Opportunity Name',
    state: 'approved',
    courseName: 'HLTH 492 (01): Service Learning In Health Sci',
    experienceDetails: dummyText,
    organizationName: 'Buen Vecino',
    programName: 'Program',
    location: 'Location',
    hours: 128,
    hoursCtaUrl: '/',
    dates: 'Fall 2022',
    timeCommitment: '200 hours',
    primaryContact: 'Name Lastname',
    formSigner: 'Name Lastname, Name Lastname,',
    timeApprover: 'Name Lastname, Name Lastname',
    obverser: 'Name Lastname',
    hasPendingForm: true,
    formsBegining: {
      items: [
        {
          id: '1',
          formName: 'Release of Liability - COVID 19',
          statusFoms: 'Submitted',
          urlForm: '/opportunities',
        },
        {
          id: '2',
          formName: 'Release of Liability - COVID 19',
          statusFoms: 'Pending',
          urlForm: '/opportunities',
        },
      ],
    },
    formsDuring: {
      items: [
        {
          id: '1',
          formName: 'Release of Liability - COVID 19',
          statusFoms: 'Submitted',
          urlForm: '/opportunities',
        },
        {
          id: '2',
          formName: 'Release of Liability - COVID 19',
          statusFoms: 'Pending',
          urlForm: '/opportunities',
        },
      ],
    },
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
  },
};
