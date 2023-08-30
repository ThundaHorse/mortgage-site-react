import * as React from 'react';
import HomeHeroLayout from '../../layouts/Home/HomeHeroLayout';
import Typography from '../../util/Typography';

// const backgroundImage = '/assets/images/test.avif';
const backgroundImage = '/assets/images/half-circle-bg.png';

export default function HomeHero() {
  return (
    <HomeHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9',
        backgroundSize: 'cover',
        backgroundPosition: 'top aboslute',
        backgroundAttachment: 'scroll',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt='increase priority'
      />
      <Typography
        color='inherit'
        align='center'
        variant='h2'
        marked='center'
      >
        Hi I'm Danny.
      </Typography>
      <Typography
        color='inherit'
        align='center'
        variant='h5'
        sx={{ mb: 2, mt: { xs: 4, sm: 10 } }}
      >
        Whether you're a first-time homebuyer or seasoned real estate investor
      </Typography>
      <Typography
        color='inherit'
        align='center'
        variant='h5'
        sx={{ mb: 4, mt: { xs: 2, sm: 4 } }}
      >
        I'm committed to making the lending process easy and helping you achieve
        your financial goals.
      </Typography>
      <Typography
        variant='body2'
        color='inherit'
        sx={{ mt: 2 }}
      >
        Discover the experience
      </Typography>
    </HomeHeroLayout>
  );
}
