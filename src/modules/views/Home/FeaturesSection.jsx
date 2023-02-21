import * as React from 'react';
// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import MediationIcon from '@mui/icons-material/Mediation';
import TokenIcon from '@mui/icons-material/Token';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '../../util/Typography';

export const FeatureSection = () => {
  return (
    <Box
      component='section'
      py={{ xs: 3, md: 12 }}
      px={{ xs: 2, md: 4 }}
    >
      <Container
        maxWidth={false}
        sx={{
          transform: {
            xs: 'translateY(-60px)',
            sm: 'translateY(-60px)',
            md: 'translateY(-150px)',
          },
          background: 'white',
          padding: '24px',
          boxShadow:
            '0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
          borderRadius: '6px',
        }}
      >
        <Grid
          container
          alignItems='center'
        >
          <Grid
            item
            xs={12}
            lg={5}
          >
            <Typography
              variant='h4'
              my={1}
            >
              Honesty, Integrity, and Professionalism
            </Typography>
            <Typography
              variant='body2'
              color='text'
              mb={2}
            >
              Commited to providing the highest level of care and attention.
              Instilling confidence and ensuring that you are informed every
              step of the way.
            </Typography>
            <Typography
              component='a'
              href='/reviews'
              variant='body2'
              color='info'
              fontWeight='regular'
              sx={{
                width: 'max-content',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',

                '& .MuiSvgIcon-root': {
                  fontSize: '1.125rem',
                  transform: 'translateX(3px)',
                  transition:
                    'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
                },

                '&:hover .MuiSvgIcon-root, &:focus .MuiSvgIcon-root': {
                  transform: 'translateX(6px)',
                },
              }}
            >
              See what people are saying
              <ArrowForwardIcon />
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ ml: { xs: -2, lg: 'auto' }, mt: { xs: 6, lg: 0 } }}
          >
            <Stack>
              <Box
                display='flex'
                alignItems='center'
                p={2}
              >
                <Box
                  width='3rem'
                  height='3rem'
                  variant='gradient'
                  bgColor='info'
                  color='black'
                  coloredShadow='info'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  borderRadius='xl'
                >
                  <MediationIcon />
                </Box>
                <Typography
                  variant='body2'
                  color='text'
                  pl={2}
                >
                  A trusted advisor to many,
                  <br />
                  effective communication skills with clients hailing from a
                  wide range of backgrounds.
                </Typography>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                p={2}
              >
                <Box
                  width='3rem'
                  height='3rem'
                  variant='gradient'
                  bgColor='info'
                  color='black'
                  coloredShadow='info'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  borderRadius='xl'
                >
                  <SettingsOverscanIcon />
                </Box>
                <Typography
                  variant='body2'
                  color='text'
                  pl={2}
                >
                  A deep understanding of the lending process
                  <br />
                  with the ability to navigate the complexities of the mortgage
                  industry.
                </Typography>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                p={2}
              >
                <Box
                  width='3rem'
                  height='3rem'
                  variant='gradient'
                  bgColor='info'
                  color='black'
                  coloredShadow='info'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  borderRadius='xl'
                >
                  <TokenIcon />
                </Box>
                <Typography
                  variant='body2'
                  color='text'
                  pl={2}
                >
                  Starting in the financial industry over a decade ago as a
                  commercial loan underwriter,
                  <br />
                  the best resolutions are carefully tailor made to suit your
                  needs.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
