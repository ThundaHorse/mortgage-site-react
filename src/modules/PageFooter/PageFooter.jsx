import React from 'react';
import { Box, Container, Grid, Link } from '@mui/material';
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
    justifyContent: {
      xs: 'center',
      md: 'flex-start',
    },
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
        paddingTop: '3rem',
        paddingBottom: '2rem',
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          direction='row'
          alignItems='stretch'
          justifyContent='space-between'
        >
          <Grid
            container
            direction='row'
            alignItems={{
              xs: 'center',
              md: 'flex-start',
            }}
            justifyContent='center'
            sx={{
              width: {
                xs: '100%',
                md: '20%',
              },
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
              minWidth: '200px',
            }}
          >
            <Image
              alt='footer logo'
              src='/assets/images/footerLogo.webp'
              fit='contain'
              duration={0}
              wrapperStyle={{
                width: {
                  xs: '100px !important',
                  md: '80% !important',
                },
              }}
              sx={{
                width: {
                  xs: '100px !important',
                  md: '80% !important',
                },
                height: 'auto',
              }}
            />

            <Grid
              container
              direction='row'
              justifyContent={{
                xs: 'center',
                md: 'flex-start',
              }}
              alignItems={{
                xs: 'center',
                md: 'flex-start',
              }}
              sx={{
                width: 'auto',
              }}
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

          <Grid
            container
            direction='column'
            justifyContent='space-between'
            sx={{
              width: {
                xs: '100%',
                md: '80%',
              },
            }}
          >
            <Typography
              color='black'
              variant='body2'
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
                fontSize: '14px',
              }}
            >
              This licensee is performing acts for which a real estate license
              is required. BCE Financial Corporation is licensed by the Georgia
              Department of Banking and Finance, Broker #60025; NMLS #1792105.
              Loan approval is not guaranteed and is subject to lender review of
              information. All loan approvals are conditional and all conditions
              must be met by borrower. Loan is only approved when lender has
              issued approval in writing and is subject to underwriting
              conditions. Specified rates may not be available for all
              borrowers. Rate subject to change with market conditions. BCE
              Financial Corporation is an Equal Opportunity Mortgage
              Broker/Lender. As a broker, BCE Financial Corporation is NOT
              individually approved by the FHA or HUD, but BCE Financial
              Corporation is allowed to originate FHA loans based on their
              relationships with FHA approved lenders.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth='lg'
        sx={{
          marginTop: {
            xs: '20px',
            md: '0',
            lg: '0',
          },
        }}
      >
        <Grid
          container
          direction='row'
          justifyContent='space-around'
          alignItems='center'
          mt={8}
        >
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: {
                xs: 'center',
                md: 'flex-start',
              },
            }}
            xs={12}
          >
            <Image
              alt='footer logo'
              src='/assets/images/logo.png'
              fit='contain'
              duration={0}
              wrapperStyle={{
                width: {
                  xs: '50px !important',
                  md: 'auto',
                },
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
              sx={{
                width: {
                  xs: '50px !important',
                  md: 'auto',
                },
                marginRight: '10px',
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            />

            <Typography
              color='textSecondary'
              variant='subtitle1'
              sx={{
                width: '100%',
              }}
            >
              {`${new Date().getFullYear()} | Mortgage Select ©`}
            </Typography>

            <Grid
              container
              direction='row'
              justifyContent='flex-end'
              alignItems='center'
            >
              <Link
                variant='a'
                color='white'
                underline='none'
                sx={{ fontSize: 16, mr: 3 }}
                href='/privacy-policy'
              >
                {'Privacy Policy'}
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
