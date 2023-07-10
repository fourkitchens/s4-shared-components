import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export type TimeLogTableProps = {
  timeLogInfo: {
    dateTime: string;
    hour: number;
    goals: string;
    learningOutcomes: string;
    status: string;
  }[];
  cta: string;
};

export default function TimeLogTable({ timeLogInfo, cta }: TimeLogTableProps) {
  const theme = useTheme();

  // Style
  const contentStyle = {
    p: theme.spacing(5),
  };

  const headerWrapper = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const iconWrapperStyle = {
    display: 'flex',
  };

  const iconStyle = {
    mr: theme.spacing(1),
    color: theme.palette.secondary.dark,
  };

  const tableStyle = {
    td: {
      p: theme.spacing(3),

      '&:first-child': {
        pl: 0,
      },
    },
    th: {
      p: theme.spacing(3),
      fontWeight: 700,

      '&:first-child': {
        pl: 0,
      },
    },
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
          <Box sx={iconWrapperStyle}>
            <FileCopyIcon sx={iconStyle} />
            <DeleteIcon sx={iconStyle} />
            <EditIcon sx={iconStyle} />
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

  return (
    <Paper sx={contentStyle}>
      <Box sx={headerWrapper}>
        <Typography variant="h2">Time log</Typography>
        <Button variant="outlined" href={cta}>
          Request approval of hours
        </Button>
      </Box>
      {renderTable}
    </Paper>
  );
}
