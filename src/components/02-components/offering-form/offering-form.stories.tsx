import type { Meta, StoryObj } from '@storybook/react';
import OfferingForm from './offering-form';

const meta: Meta<typeof OfferingForm> = {
  title: 'Components/Offering Form',
  component: OfferingForm,
};

export default meta;

const defaultDescription = `<p>
  We exist to serve the most vulnerable in our communities. We do this by
  partnering with agencies to give us insight into areas where volunteers can
  meet the most pressing needs, empowering volunteers to manifest compassion and
  service as representatives of their communities, and mobilizing churches and
  businesses to serve in projects in their cities throughout the year!
</p>`;

const defaultTraining = `<p>
Plura mihi bona sunt, inclinet, amari petere vellent. Me non paenitet nullum festiviorem excogitasse ad hoc. Ullamco laboris nisi ut aliquid ex ea commodi consequat. Tu quoque, Brute, fili mi, nihil timor populi, nihil!
</p>`;

const users = [
  { id: '1', name: 'Emily Parker' },
  { id: '2', name: 'Mathew Ross' },
  { id: '3', name: 'Carlos Smith' },
  { id: '4', name: 'Robert Thomsom' },
  { id: '5', name: 'Marcus Rivers' },
  { id: '6', name: 'Peter Mask' },
  { id: '7', name: 'David Paz' },
  { id: '8', name: 'Martin Lopéz' },
  { id: '9', name: 'Christopher James' },
  { id: '10', name: 'Harry Brown' },
];

const focusPopulations = [
  { id: '1', name: 'People Experiencing Addiction' },
  { id: '2', name: 'Seniors' },
  { id: '3', name: 'Veterans, Active Military and/or Military Families' },
  { id: '4', name: 'Veterans, People Experiencing Homelessness' },
  { id: '5', name: 'People Experiencing Material Poverty' },
  { id: '6', name: 'Adults' },
  { id: '7', name: 'Formerly Incarcerated People' },
  { id: '8', name: 'Children/Youth' },
  { id: '9', name: 'Immigrants/Refugees' },
];

const focusAreas = [
  { id: '1', name: 'Emergency Services & Public Safety' },
  { id: '2', name: 'International Service Experiences' },
  { id: '3', name: 'Arts, Culture, and Humanities' },
  { id: '4', name: 'Construction' },
  { id: '5', name: 'Restorative Justice' },
  { id: '6', name: 'Transportation & Tourism' },
  { id: '7', name: 'Migration & Naturalization Services' },
];

const subFocusAreas = [
  { id: '1', name: 'Legal Assistance' },
  { id: '2', name: 'Human Rights and Liberties' },
  { id: '3', name: 'Political Engagement' },
  { id: '4', name: 'Cultural Programs' },
  { id: '5', name: 'Fine Arts' },
];

const activities = [
  {
    id: '1',
    name: 'Support or assist with an event, program, or community project',
  },
  { id: '2', name: 'Prepare and/or serve food' },
  { id: '3', name: 'Serve in a coaching role' },
  { id: '4', name: 'Provide translation and/or transcription services' },
  {
    id: '5',
    name: 'Participate in a painting, building, renovation or construction activity (such as, neighborhood/housing restoration or building theater props or playgrounds, etc)',
  },
];

const languages = [
  { id: '1', name: 'Spanish' },
  { id: '2', name: 'French' },
  { id: '3', name: 'German' },
  { id: '4', name: 'English' },
];

export const AddOffering: StoryObj<typeof OfferingForm> = {
  args: {
    breadcrumb: [
      {
        title: 'Offerings',
        url: '#',
      },
      {
        title: 'Add Offering',
        url: '#',
      },
    ],
    title: 'Add Offering',
    departments: [
      { id: '1', name: 'Design' },
      { id: '2', name: 'Human Resources' },
      { id: '3', name: 'Sales' },
    ],
    primaryContacts: users,
    timeApprovers: users,
    formSigners: users,
    observers: users,
    preferredLanguages: languages,
    requiredLanguages: languages,
    focusPopulations,
    focusAreas,
    subFocusAreas,
    activities,
    submitButtonText: 'Create offering',
  },
};

export const EditOffering: StoryObj<typeof OfferingForm> = {
  args: {
    breadcrumb: [
      {
        title: 'Offerings',
        url: '#',
      },
      {
        title: 'Hi omnes lingua, institutis, legibus inter se differunt.',
        url: '#',
      },
      {
        title: 'Edit',
        url: '#',
      },
    ],
    title: 'Hi omnes lingua, institutis, legibus inter se differunt.',
    departments: [
      { id: '1', name: 'Design' },
      { id: '2', name: 'Human Resources' },
      { id: '3', name: 'Sales' },
    ],
    primaryContacts: users,
    timeApprovers: users,
    formSigners: users,
    observers: users,
    preferredLanguages: languages,
    requiredLanguages: languages,
    focusPopulations,
    focusAreas,
    subFocusAreas,
    activities,
    submitButtonText: 'Update offering',
    defaultPrimaryContact: '1',
    defaultTimeApprovers: ['1', '4'],
    defaultFormSigners: ['5', '8'],
    defaultObservers: ['3', '6'],
    defaultPreferredLanguages: ['1', '3'],
    defaultRequiredLanguages: ['3', '4'],
    defaultFocusPopulations: ['2', '3'],
    defaultFocusAreas: ['5', '7'],
    defaultSubFocusAreas: ['2', '4'],
    defaultActivities: ['1'],
    defaultName: 'Hi omnes lingua, institutis, legibus inter se differunt.',
    defaultRequiresApproval: true,
    defaultDepartment: '2',
    defaultOfferingType: 'remote',
    defaultMaxStudents: 2,
    defaultStartDate: '2023-07-04',
    defaultEndDate: '2023-07-10',
    defaultDescription,
    defaultTraining,
    defaultTimeAmount: 2,
    defaultTimeUnit: 'days',
    defaultTimeFrequency: 'month',
  },
};
