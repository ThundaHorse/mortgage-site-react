import * as React from 'react';
import withRoot from '../modules/withRoot';

// Layout
import HomeHero from '../modules/views/Home/HeroSection';

function Home() {
  return (
    <React.Fragment>
      <div id='home'>
        <HomeHero />
      </div>
    </React.Fragment>
  );
}

export default withRoot(Home);
