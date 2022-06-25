import React from "react";

// import Header from './homeComponents/Header';
import Cta from "./homeComponents/Cta";
// import Initiative from './homeComponents/Initiative.js';
import WhoWeAre from "./homeComponents/WhoWeAre";
import WhatWeDo from "./homeComponents/WhatWeDo";
import JoinUs from "./homeComponents/JoinUs.js";


const Home = () => {
  return (
    <>
      <Cta></Cta>
      <WhoWeAre></WhoWeAre>
      <WhatWeDo></WhatWeDo>
      <JoinUs></JoinUs>
    </>
  );
};

export default Home;
