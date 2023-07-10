import {
  Box,
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import CardExperienceHours from '../card-experience-hours/card-experience-hours';
import Breadcrumbs from '../../01-elements/breadcrumbs/breadcrumbs';
import Link from '../../01-elements/link/link';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export type ExperiencePageProps = {
  experienceName: string;
  opportunityName: string;
  state: string;
  experienceDetails: string;
  programName: string;
  courseName: string;
  organizationName: string;
  dates: string;
  timeCommitment: string;
  location: string;
  hours: number;
  hoursCtaUrl: string;
  url: string;
  primaryContact: string;
  formSigner: string;
  timeApprover: string;
  obverser: string;
  hasPendingForm: boolean;
  formsBegining?: {
    items: {
      id: string;
      formName: string;
      statusFoms: string;
      urlForm: string;
    }[];
  };
  formsDuring?: {
    items: {
      id: string;
      formName: string;
      statusFoms: string;
      urlForm: string;
    }[];
  };
  timeLogInfo: {
    dateTime: string;
    hour: number;
    goals: string;
    learningOutcomes: string;
    status: string;
  }[];
};

export default function ExperiencePage({
  experienceName,
  url,
  opportunityName,
  state,
  experienceDetails,
  programName,
  organizationName,
  courseName,
  dates,
  timeCommitment,
  location,
  hours,
  hoursCtaUrl,
  formsBegining,
  formsDuring,
  timeLogInfo,
  primaryContact,
  formSigner,
  timeApprover,
  obverser,
  hasPendingForm,
}: ExperiencePageProps) {
  const theme = useTheme();

  // Variables to manage workflow status
  const states: { [index: string]: { color: string; label: string } } = {
    draft: {
      color: theme.palette.warning.light,
      label: 'Risk Acknowledgment',
    },
    pending: {
      color: theme.palette.warning.main,
      label: 'Pending',
    },
    approved: {
      color: theme.palette.success.main,
      label: 'Approved',
    },
    declined: {
      color: theme.palette.secondary.main,
      label: 'Declined',
    },
    site_staff: {
      color: theme.palette.error.light,
      label: 'Site Staff',
    },
    duration: {
      color: theme.palette.teal.main,
      label: 'Duration',
    },
    grace_period: {
      color: theme.palette.blue.main,
      label: 'Grace Period',
    },
    published: {
      color: theme.palette.success.light,
      label: 'Active',
    },
    success: {
      color: theme.palette.success.dark,
      label: 'Success',
    },
    incomplete: {
      color: theme.palette.error.main,
      label: 'Incomplete',
    },
  };

  // Styles
  const experienceNameStyles = {
    mb: theme.spacing(3),
  };

  const headingStyles = {
    fontWeight: '700',
  };

  const headingFormItemStyle = {
    fontWeight: '700',
    marginTop: theme.spacing(3),
  };

  const headingFormStyles = {
    mb: theme.spacing(3),
  };

  const formWrapperStyle = {
    p: `${theme.spacing(2)} ${theme.spacing(4)} `,
    mb: theme.spacing(5),
  };

  const formListStyles = {
    m: `${theme.spacing(3)} 0 0`,
    p: 0,
    listStyleType: 'none',
  };

  const formItemStyles = {
    display: 'flex',
    py: theme.spacing(2),
    alignItems: 'center',
    flexDirection: 'column',
    borderTop: `1px solid ${theme.palette.secondary.light}`,
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
  };

  const formItemName = {
    flexBasis: '30%',
  };

  const formItemStatus = {
    display: 'flex',
    flexBasis: '20%',
  };

  const descriptionStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const stateStyle = {
    marginTop: theme.spacing(2),
    backgroundColor: states[state].color,
    px: theme.spacing(1),
    borderRadius: '4px',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(2),
      my: '0',
    },
  };

  const containerStyle = {
    display: 'flex',
    p: theme.spacing(3),
    mb: theme.spacing(5),
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      p: theme.spacing(5),
      minWidth: '600px',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  };

  const contentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 'auto',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  };

  const bodyWrapperStyle = {
    flex: '1 0 70%',
  };

  const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      marginBottom: 0,
    },
  };

  const headingWrapperStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(1),
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  };

  const descriptionContainerStyle = {
    flexBasis: '60%',
    marginRight: theme.spacing(5),
  };

  const programInfoStyle = {
    flexBasis: '40%',
  };

  const cardHoursStyle = {
    flex: '1 0 25%',
  };

  const iconSubmittedStyle = {
    color: theme.palette.success.main,
    marginRight: theme.spacing(1),
  };

  const iconPendingStyle = {
    color: theme.palette.warning.main,
    marginRight: theme.spacing(1),
  };

  const tableStyle = {
    td: {
      padding: theme.spacing(5),
    },
    th: {
      padding: theme.spacing(5),
    },
  };

  const dividerStyle = {
    width: '100%',
  };

  const staffWrapperStyle = {
    marginTop: theme.spacing(3),
  };

  const listStaffStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: `${theme.spacing(2)} ${theme.spacing(5)} `,
    },
  };

  const pendingFormStyle = {
    display: 'flex',
    marginBottom: theme.spacing(3),
    border: `1px solid ${theme.palette.warning.main}`,
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
  };

  // Components
  const renderedHeader = [
    'Date/Time',
    'Hours alculated',
    'How have you contributed to the goals/mission of the organization?',
    'Learning outcomes',
    'status',
    ' ',
  ].map((label) => {
    return <TableCell>{label}</TableCell>;
  });

  const renderedBody = timeLogInfo.map((row) => {
    return (
      <TableRow>
        <TableCell>{row.dateTime}</TableCell>
        <TableCell>{row.hour}</TableCell>
        <TableCell>{row.goals}</TableCell>
        <TableCell>{row.learningOutcomes}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>
          <Box>
            <FileCopyIcon />
            <DeleteIcon />
            <EditIcon />
          </Box>
        </TableCell>
      </TableRow>
    );
  });

  const renderTable = (
    <Table sx={tableStyle}>
      <TableHead>
        <TableRow>{renderedHeader}</TableRow>
      </TableHead>
      <TableBody>{renderedBody}</TableBody>
    </Table>
  );

  const renderedDescription = experienceDetails && (
    <Box sx={descriptionStyle}>
      <strong>Experience Details:</strong>
      {experienceDetails}
    </Box>
  );

  const renderedState = state && (
    <Typography sx={stateStyle} variant="body2">
      {states[state].label}
    </Typography>
  );

  return (
    <article>
      <Breadcrumbs items={[{ title: 'Experiences', url }]} />
      <Box>
        <Typography variant="h1" color="primary.main" sx={experienceNameStyles}>
          {experienceName}
        </Typography>

        <Paper sx={containerStyle}>
          <Box sx={contentStyle}>
            <Box sx={bodyWrapperStyle}>
              <Box sx={headingWrapperStyle}>
                <Typography sx={headingStyles} variant="h2">
                  {opportunityName}
                </Typography>
                {renderedState}
              </Box>
              <Box sx={infoStyle}>
                <Box sx={descriptionContainerStyle}>{renderedDescription}</Box>
                <Box sx={programInfoStyle}>
                  <Box>
                    <strong>Program: </strong>
                    {programName}
                  </Box>
                  <Box>
                    <strong>Course: </strong>
                    {courseName}
                  </Box>
                  <Box>
                    <strong>Organization: </strong>
                    {organizationName}
                  </Box>
                  <Box>
                    <strong>Date: </strong>
                    {dates}
                  </Box>
                  <Box>
                    <strong>Time Commitment: </strong>
                    {timeCommitment}
                  </Box>
                  <Box>
                    <strong>Location: </strong>
                    {location}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={cardHoursStyle}>
              <CardExperienceHours
                hours={hours}
                cta={hoursCtaUrl}
                position="column"
              />
            </Box>
          </Box>
          {hasPendingForm && (
            <Box sx={pendingFormStyle}>
              <ErrorOutlineIcon sx={iconPendingStyle} />
              <Box>
                <Typography sx={headingStyles} variant="h4">
                  Pending forms
                </Typography>
                <Typography variant="body2">
                  There are pending forms for this experience, please fill all
                  the forms.
                </Typography>
              </Box>
            </Box>
          )}
          <Divider sx={dividerStyle} />
          <Box sx={staffWrapperStyle}>
            <Typography sx={headingStyles} variant="h3">
              Site Staff
            </Typography>
            <Box sx={listStaffStyle}>
              <Box>
                <strong>Primary contac(s): </strong>
                {primaryContact}
              </Box>
              <Box>
                <strong>Form signer(s): </strong>
                {formSigner}
              </Box>
              <Box>
                <strong>Time approver(s): </strong>
                {timeApprover}
              </Box>
              <Box>
                <strong>Observer(s): </strong>
                {obverser}
              </Box>
            </Box>
          </Box>
        </Paper>

        <Paper sx={formWrapperStyle}>
          <Typography sx={headingFormStyles} variant="h2">
            Forms
          </Typography>
          {formsBegining && (
            <Box>
              <Typography sx={headingFormItemStyle} variant="h4">
                Beginning of Term
              </Typography>
              <Box component="ul" sx={formListStyles}>
                {formsBegining.items.map((item) => (
                  <Box component="li" key={item.id} sx={formItemStyles}>
                    <Typography sx={formItemName}>{item.formName}</Typography>
                    <Typography variant="body2" sx={formItemStatus}>
                      {item.statusFoms === 'Submitted' ? (
                        <CheckCircleOutlineOutlinedIcon
                          sx={iconSubmittedStyle}
                        />
                      ) : (
                        <ErrorOutlineIcon sx={iconPendingStyle} />
                      )}
                      {item.statusFoms}
                    </Typography>
                    <Button
                      variant="outlined"
                      component={Link}
                      href={item.urlForm}
                      sx={{ flexShrink: 0 }}
                    >
                      Complete form
                    </Button>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
          {formsDuring && (
            <Box>
              <Typography sx={headingFormItemStyle} variant="h4">
                During Term
              </Typography>
              <Box component="ul" sx={formListStyles}>
                {formsDuring.items.map((item) => (
                  <Box component="li" key={item.id} sx={formItemStyles}>
                    <Typography sx={formItemName}>{item.formName}</Typography>
                    <Typography variant="body2" sx={formItemStatus}>
                      {item.statusFoms === 'Submitted' ? (
                        <CheckCircleOutlineOutlinedIcon
                          sx={iconSubmittedStyle}
                        />
                      ) : (
                        <ErrorOutlineIcon sx={iconPendingStyle} />
                      )}
                      {item.statusFoms}
                    </Typography>
                    <Button
                      variant="outlined"
                      component={Link}
                      href={item.urlForm}
                      sx={{ flexShrink: 0 }}
                    >
                      Complete form
                    </Button>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Paper>
        <Paper>{renderTable}</Paper>
      </Box>
    </article>
  );
}
