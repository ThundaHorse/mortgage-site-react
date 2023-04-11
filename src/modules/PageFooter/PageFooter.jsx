import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '../util/Typography';
import Image from 'mui-image';

export const PageFooter = () => {
  const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mr: 1,
    '&:hover': {
      color: 'warning.dark',
    },
    color: 'white',
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'primary.main',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          direction='column'
          alignItems='center'
        >
          <Grid
            item
            xs={12}
          >
            <Typography
              color='black'
              variant='h5'
            >
              Danny Park Mortgage
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ display: 'flex' }}
          >
            <Box
              component='a'
              href='https://twitter.com/MUI_hq'
              sx={iconStyle}
            >
              <FacebookIcon />
            </Box>
            <Box
              component='a'
              href='https://twitter.com/MUI_hq'
              sx={iconStyle}
            >
              <InstagramIcon />
            </Box>
            <Box
              component='a'
              href='https://twitter.com/MUI_hq'
              sx={iconStyle}
            >
              <LinkedInIcon />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth='lg'>
        <Grid
          container
          spacing={2}
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid
            item
            sx={{ display: 'flex' }}
          >
            <Image
              alt='footer logo'
              src='/assets/images/logo.png'
              fit='contain'
              duration={0}
              sx={{ width: '50px !important' }}
            />
            {/* <Typography
              color='textSecondary'
              variant='subtitle1'
            >
              {`${new Date().getFullYear()} | Mortgage Select`}
            </Typography> */}
          </Grid>

          <Grid
            item
            sx={{ display: 'flex' }}
          >
            <Typography
              color='textSecondary'
              variant='subtitle1'
            >
              {`${new Date().getFullYear()} | Mortgage Select`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
