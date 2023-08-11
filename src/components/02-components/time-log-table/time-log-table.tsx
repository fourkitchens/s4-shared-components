import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import Pager from '../../01-elements/pager/pager';

export type TimeLogTableProps = {
  cta: string;
  currentPage: number;
  itemsPerPage: number;
  timeLogInfo: {
    dateTime: string;
    hour: number;
    goals: string;
    learningOutcomes: string;
    status: string;
  }[];
  totalItems: number;
  url: string;
};

export default function TimeLogTable({
  cta,
  currentPage,
  itemsPerPage,
  timeLogInfo,
  totalItems,
  url,
}: TimeLogTableProps) {
  const theme = useTheme();

  // Style
  const contentStyles = {
    p: theme.spacing(5),
  };

  const headerWrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  };

  const iconWrapperStyles = {
    display: 'flex',
    gap: theme.spacing(2),
  };

  const iconStyles = {
    color: theme.palette.secondary.dark,
  };

  const tableStyles = {
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
  const renderedBody = timeLogInfo.map((row) => {
    return (
      <TableRow>
        <TableCell>{row.dateTime}</TableCell>
        <TableCell>{row.hour}</TableCell>
        <TableCell>{row.goals}</TableCell>
        <TableCell>{row.learningOutcomes}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>
          <Box sx={iconWrapperStyles}>
            <FileCopyIcon sx={iconStyles} />
            <DeleteIcon sx={iconStyles} />
            <EditIcon sx={iconStyles} />
          </Box>
        </TableCell>
      </TableRow>
    );
  });

  const renderTable = (
    <TableContainer>
      <Table sx={tableStyles}>
        <TableHead>
          <TableRow>
            <TableCell>Date/Time</TableCell>
            <TableCell>Hours Calculated</TableCell>
            <TableCell>
              How have you contributed to the goals/mission of the organization?
            </TableCell>
            <TableCell>Learning outcomes</TableCell>
            <TableCell>Status</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>{renderedBody}</TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Paper sx={contentStyles}>
      <Box sx={headerWrapperStyles}>
        <Typography variant="h2">Time log</Typography>
        <Button variant="outlined" href={cta}>
          Request approval of hours
        </Button>
      </Box>
      {renderTable}
      {totalItems > itemsPerPage && (
        <Pager
          baseUrl={url}
          count={Math.ceil(totalItems / itemsPerPage)}
          page={currentPage}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: theme.spacing(3),
          }}
        />
      )}
    </Paper>
  );
}
