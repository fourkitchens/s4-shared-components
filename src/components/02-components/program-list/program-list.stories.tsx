
import type { Meta, StoryObj } from '@storybook/react';

import ProgramList from './program-list';

const meta: Meta<typeof ProgramList> = {
  title: 'Components/Program List',
  component: ProgramList,
};

export default meta;

const programs = [
  {
    id: '001',
    title: 'Service learning',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    applyUrl: '#',
  }, {
    id: '002',
    title: 'Social Work Field Placements',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    applyUrl: '#',
  }, {
    id: '003',
    title: 'Teacher Credentialing Programs',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    applyUrl: '#',
  }, {
    id: '004',
    title: 'Academic Internships',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    applyUrl: '#',
  }, {
    id: '005',
    title: 'Service learning',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    applyUrl: '#',
  }, {
    id: '006',
    title: 'Teacher Credentialing Programs',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    applyUrl: '#',
  }, {
    id: '007',
    title: 'Academic Internships',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    applyUrl: '#',
  }, {
    id: '008',
    title: 'Service learning',
    description: 'Through service learning programs, students have the opportunity to develop important skills such as teamwork, communication, leadership, and problem-solving.',
    url: '#',
    applyUrl: '#',
  },
];

const displatFilterValues = [
  { id: '1', label: 'Show my programs' },
  { id: '2', label: 'Show all programs' },
];

const programsData = {
  items: programs,
  totalItems: 20,
  itemsPerPage: 8,
  currentPage: 1,
  displatFilterValues: displatFilterValues,
  defaultProgramDisplay: '1',
};

export const Default: StoryObj<typeof ProgramList> = {
  args: {
    ...programsData,
  },
};
