import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Image from 'mui-image';

const HomeHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: '-100px',
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'scroll',
  backgroundPosition: 'top left',
  zIndex: -2,
});

function HomeHeroLayout(props) {
  const { sxBackground, children } = props;

  return (
    <HomeHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />

        <Box>
          <Image
            alt='hero image'
            src='/assets/images/danny-full-body.webp'
            fit='contain'
            easing='ease-in'
            duration={1000}
            position='absolute'
            sx={{
              right: 0,
              bottom: 0,
              zIndex: -1,
              width: { xs: 'auto', sm: 'auto', md: 'auto !important' },
              display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
              },
            }}
          />
        </Box>
      </Container>
    </HomeHeroLayoutRoot>
  );
}

HomeHeroLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default HomeHeroLayout;
