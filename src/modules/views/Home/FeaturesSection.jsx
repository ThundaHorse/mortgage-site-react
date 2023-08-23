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
    <>
      <Box
        className='featuresContainer'
        component='section'
        py={{ xs: 3, md: 12 }}
        px={{ xs: 2, md: 4 }}
        sx={{
          paddingBottom: '0 !important',
        }}
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
              lg={12}
            >
              <Typography
                variant='h4'
                my={1}
                sx={{ textAlign: 'center' }}
              >
                Honesty, Integrity, and Professionalism
              </Typography>
              <Typography
                variant='body2'
                color='text'
                mb={2}
                sx={{ textAlign: 'center' }}
              >
                Commited to providing the highest level of care and attention.
                Instilling confidence and ensuring that you are informed every
                step of the way.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        className='aboutContainer'
        component='section'
        py={{ xs: 3, md: 8 }}
        px={{ xs: 2, md: 4 }}
        sx={{ paddingBottom: '0 !important' }}
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
              lg={12}
            >
              <Typography
                variant='h5'
                my={1}
              >
                "Danny Park is a talented and experienced mortgage broker who
                has a passion for helping people achieve their dreams of
                homeownership."
              </Typography>

              <Typography
                variant='body2'
                color='text'
                mb={4}
              >
                I got my start in the financial industry more than a decade ago
                as a commercial loan underwriter and has since built a
                reputation as one of the most knowledgeable and reliable
                mortgage brokers in the field. Utilizing my deep understanding
                of the lending process and the ability to navigate the
                complexities of the mortgage industry have helped countless
                clients secure the financing they need to purchase their first
                home, refinance their existing mortgage, or invest in real
                estate.
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              lg={12}
            >
              <Typography
                variant='body1'
                sx={{ mb: 2, textAlign: 'center' }}
              >
                "Danny is also known for his commitment to his clients. He takes
                the time to listen to their needs and concerns and works
                tirelessly to find the best possible solutions for their unique
                financial situations. Whether his clients are first-time
                homebuyers or seasoned real estate investors, Danny treats each
                one with the same level of care and attention, making sure that
                they feel confident and informed every step of the way."
              </Typography>

              <Typography
                variant='body1'
                sx={{ mb: 4, textAlign: 'center' }}
              >
                "With his fluency in both English and Korean, Danny is able to
                effectively communicate with clients from a wide range of
                backgrounds, which has helped him to establish strong
                relationships in multiple communities. He is a trusted advisor
                to many, and his reputation for honesty, integrity, and
                professionalism has earned him a loyal following."
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              lg={6}
              alignItems={{ xs: 'center', lg: 'flex-start' }}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Typography
                variant='body1'
                sx={{ mb: 2, textAlign: 'center' }}
              >
                If you are in need of a mortgage broker who has a deep
                understanding of the lending process and a commitment to helping
                you achieve your financial goals, look no further. He is the
                ideal choice for anyone looking to secure the financing they
                need to purchase or invest in real estate.
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
              sx={{ ml: { xs: -2, lg: 'auto' }, mt: { xs: 2, lg: 0 } }}
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
                    bgcolor='info'
                    color='black'
                    coloredshadow='info'
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
                    bgcolor='info'
                    color='black'
                    coloredshadow='info'
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
                    with the ability to navigate the complexities of the
                    mortgage industry.
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
                    bgcolor='info'
                    color='black'
                    coloredshadow='info'
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
    </>
  );
};
