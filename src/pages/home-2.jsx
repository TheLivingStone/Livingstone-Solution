import React from "react";
import Layouts from "@layouts/Layouts";

import HeroTwoSection from "@components/sections/HeroTwo"
import SEO from "@components/SEO";

const Home2 = (props) => {
  return (
    <Layouts noFooter>
      <SEO title="Personal Portfolio" description="The Livingstone Solution personal home portfolio in Washington D.C." canonical="https://solution.thelivingstonefoundation.com/" />
      <HeroTwoSection />
    </Layouts>
  );
};
export default Home2;