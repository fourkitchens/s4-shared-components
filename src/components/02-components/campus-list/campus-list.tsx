import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ElementType, ReactNode } from 'react';
import Pager from '../../01-elements/pager/pager';

type CampusListProps = {
  children: ReactNode;
  url: string;
  FormElement?: ElementType;
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  statusFilterValues: {
    id: string;
    label: string;
  }[];
};

export default function CampusList({
  children,
  url,
  FormElement,
  totalItems,
  itemsPerPage,
  currentPage,
  statusFilterValues,
}: CampusListProps) {
  const theme = useTheme();

  const firstItem = itemsPerPage * (currentPage - 1) + 1;
  const lastItem =
    totalItems > itemsPerPage ? firstItem + itemsPerPage - 1 : totalItems;

  // Styles.
  const containerStyles = {
    mt: theme.spacing(3),
    p: theme.spacing(3),
    pb: theme.spacing(4),
  };

  const listStyles = {
    '& article + article': {
      mt: theme.spacing(3),
    },
  };

  const formInner = (
    <>
      <FormControl size="small" sx={{ mr: theme.spacing(2) }}>
        <InputLabel id="status-select-label">Status</InputLabel>
        <Select id="status-select" label="Status" native={true} name="status">
          {statusFilterValues.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Name"
        id="name"
        size="small"
        name="name"
        sx={{ mr: theme.spacing(2) }}
      />
      <Button variant="contained" type="submit">
        Apply Filters
      </Button>
    </>
  );

  const form = FormElement ? (
    <FormElement>{formInner}</FormElement>
  ) : (
    <form>{formInner}</form>
  );

  return (
    <div>
      <Typography variant="h1">Campuses</Typography>
      <Paper elevation={0} sx={containerStyles}>
        <Typography>
          This page includes a list of campuses and the programs that are
          currently using CalState S4. You can use the filter function to see a
          list of campuses with which your organization has an existing
          partnership. For campuses your organization is not currently partnered
          with, use the Initiate Partnership button to begin the process.
        </Typography>
        <Box sx={{ pt: theme.spacing(2), pb: theme.spacing(6) }}>{form}</Box>
        <Typography sx={{ mb: theme.spacing(2) }}>
          Showing {firstItem} to {lastItem} of {totalItems} results
        </Typography>
        <Box sx={listStyles}>{children}</Box>
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
      </Paper>
    </div>
  );
}
