import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Work from '../components/workImage';


const Workpage = () => (
	<Layout>
  <SEO title="Portfolio" />
  <div className="container-fluid work mt-2 pt-4 d-flex flex-column">
    {/* <div className="work-headline d-block d-flex flex-row mb-4 pb-4" style={{marginLeft:"30vw", marginTop:'5em'}}>
        <Headline
          id="project"
          name={"project"}
          headln={"PROJECTS"}
          data={"j"}
        />
    </div> */}
    <div className="workf mt-2 pt-2">
      <Work className="d-block" />
    </div>
  </div>
</Layout>
);

export default Workpage;
