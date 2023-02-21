import * as React from 'react';
import withRoot from '../modules/withRoot';

// Layout
import HomeHero from '../modules/views/Home/HeroSection';
import { FeatureSection } from '../modules/views/Home/FeaturesSection';

function Home() {
  return (
    <React.Fragment>
      <div id='home'>
        <HomeHero />

        <FeatureSection />
      </div>
    </React.Fragment>
  );
}

export default withRoot(Home);
