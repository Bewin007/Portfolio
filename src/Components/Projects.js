import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Hardware_Forensics" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Youtube_Analysis_Tool" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="DNS_Filtering_Service" />
        {/* <ProjectBox projectPhoto={TindogImage} projectName="Tindog" /> */}
      </div>

    </div>
  )
}

export default Projects