import React from 'react';
import Typography from '../modules/util/Typography';
import { Box, Container, Grid } from '@mui/material';

export const PrivacyPolicy = () => {
  const collectedInfo = [
    'Information we receive from you on applications or other forms, over the telephone or in face-to-face meetings, and via the Internet. Examples of information we receive from you include your name, address, telephone number, social security number, credit history and other financial information.',
    'Information about your transactions with us or others. Examples of information relating to your transactions include payment histories, account balances and account activity.',
    'Information we receive from a consumer reporting agency. Examples of information from consumer reporting agencies include your credit score, credit reports and other information relating to your creditworthiness.',
    'From employers and others to verify information you have given to us. Examples of information provided by employers and others include verification of employment, income or deposits.',
  ];
  return (
    <>
      <div id='privacy-policy'>
        <Box
          py={{ xs: 2, md: 6 }}
          px={{ xs: 2, md: 4 }}
        >
          <Container maxWidth='lg'>
            <Grid
              container
              alignItems='center'
            >
              <Grid
                item
                xs={12}
              >
                <Typography
                  color='inherit'
                  align='center'
                  variant='h3'
                  marked='center'
                >
                  Privacy Policy
                </Typography>
              </Grid>

              <p>&nbsp;</p>
            </Grid>

            <Grid
              container
              alignItems='center'
              spacing={{ xs: 0, md: 1 }}
            >
              <Grid
                item
                xs={12}
              >
                <Typography
                  color='inherit'
                  align='left'
                  variant='body1'
                  sx={{
                    marginTop: '10px',
                  }}
                >
                  Customer service is very important to us. As we continue to
                  improve and expand our services, we recognize our customers’
                  need and desire to preserve their privacy and confidentiality.
                  Safeguarding our customers’ privacy is also very important to
                  us. We have adopted standards that help maintain and preserve
                  the confidentiality of customers’ nonpublic personal
                  information. The following Statement affirms our continued
                  efforts to safeguard customer information.
                </Typography>
                <p>&nbsp;</p>
              </Grid>

              <Grid
                item
                xs={12}
              >
                <Typography
                  color='inherit'
                  align='left'
                  variant='h5'
                  sx={{
                    marginTop: '10px',
                  }}
                >
                  Information We Collect
                </Typography>

                <Typography
                  color='inherit'
                  align='left'
                  variant='body1'
                  sx={{
                    marginTop: '6px',
                  }}
                >
                  We gather nonpublic personal information about our customers
                  as may be necessary to conduct business with our customers. We
                  collect nonpublic personal information about you from the
                  following sources:
                </Typography>

                <ul>
                  {collectedInfo.map((info, index) => (
                    <li key={index}>
                      <Typography
                        color='inherit'
                        variant='body2'
                      >
                        {info}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Grid>

              <Grid
                item
                xs={12}
              >
                <Typography
                  color='inherit'
                  align='left'
                  variant='h5'
                  sx={{
                    marginTop: '10px',
                  }}
                >
                  Information We Disclose
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
              >
                <Typography
                  color='inherit'
                  align='left'
                  variant='body1'
                  sx={{
                    marginTop: '6px',
                  }}
                >
                  Your personal information will only be retained for the
                  purpose of providing you with our response to your query and
                  will not be made available to any third party except as
                  necessary to be disclosed to any related entity for the
                  purpose intended or as required to be disclosed under law.
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
              >
                <Typography
                  color='inherit'
                  align='left'
                  variant='body1'
                >
                  By submitting data on our website, the visitor is providing
                  explicit consent to transmission of data collected on the
                  website.
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
              >
                <Typography
                  color='inherit'
                  align='left'
                  variant='body1'
                >
                  We treat data as confidential within our firm and require a
                  strict adherence of all our employees to data protection and
                  our confidentiality policies.
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
              >
                <Typography
                  color='inherit'
                  align='left'
                  variant='body1'
                >
                  All visitors, however, should be aware that our website may
                  contain links to other sites that are not governed by this or
                  any other privacy statement.
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
              >
                <Typography
                  color='inherit'
                  align='left'
                  variant='body1'
                >
                  We reserve the right to amend (that is, add to, delete or
                  change) the terms of this Privacy Statement from time to time.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  );
};
