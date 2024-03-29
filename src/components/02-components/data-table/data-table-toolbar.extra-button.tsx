import { Typography, useTheme, Button } from '@mui/material';
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from '@mui/x-data-grid';

type GridToolbarProps = {
  title: string;
  btnTitle: string;
  btnUrl: string;
};

const GridToolbarExtraButton: React.FC<GridToolbarProps> = ({ title, btnTitle, btnUrl }) => {
  const theme = useTheme();
  const breakpoint = 'sm';

  // Styles.
  const buttonToolbarStyles = {
    border: '1px solid',
    minWidth: '100%',
    [theme.breakpoints.up(breakpoint)]: {
      minWidth: 'min-content',
      marginRight: theme.spacing(3),
    },
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>, url: string) => {
    event.stopPropagation();
    event.preventDefault();
    const idsSeleted = (document.getElementsByName('selectedIds')[0] as HTMLInputElement).value;
    window.location.href = `${url}&members=${idsSeleted}`;
  };

  return (
    <GridToolbarContainer
      sx={{
        display: 'flex',
        justifyContent: 'left',
        pt: theme.spacing(3),
        [theme.breakpoints.up(breakpoint)]: {
          justifyContent: 'right',
        },
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          minWidth: '100%',
          [theme.breakpoints.up(breakpoint)]: {
            minWidth: 'min-content',
            marginRight: 'auto',
          },
        }}
      >
        {title}
      </Typography>
      <GridToolbarColumnsButton sx={buttonToolbarStyles} />
      <GridToolbarDensitySelector sx={buttonToolbarStyles} />
      <GridToolbarExport
        printOptions={{
          hideFooter: true,
          hideToolbar: true,
        }}
        sx={buttonToolbarStyles}
      />
      <Button
        variant="outlined"
        href={btnUrl}
        sx={buttonToolbarStyles}
        onClick={(e) => handleClick(e, btnUrl)}
      >
        {btnTitle}
      </Button>

    </GridToolbarContainer>
  );
};

export default GridToolbarExtraButton;
