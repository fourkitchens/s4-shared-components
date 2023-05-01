import { Typography } from '@mui/material';
import Link from '../../01-elements/link/link';
import Logo from '../../01-elements/logo/logo';

export type BrandProps = {
  campusName: string | null;
  linkURL?: string;
};

export default function Brand({ campusName, linkURL = '/' }: BrandProps) {
  return (
    <Link
      sx={{ display: 'flex', marginLeft: (theme) => theme.spacing(1) }}
      underline="none"
      href={linkURL}
    >
      <Logo />
      {campusName && (
        <Typography
          variant="h5"
          color="white"
          sx={{ fontWeight: '800', marginLeft: (theme) => theme.spacing(3) }}
        >
          {campusName}
        </Typography>
      )}
    </Link>
  );
}
