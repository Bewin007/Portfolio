import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    TindogDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub : "https://github.com/DevanshSahni/tindog",
    TindogWebsite : "https://devanshsahni.github.io/tindog/",

    DNS_Filtering_ServiceDesc : " A robust and proactive solution designed to enhance online security and productivity. 🌐🔒 This cutting-edge service empowers organizations to control and monitor internet access by filtering and blocking malicious websites, ensuring a secure digital environment. With a focus on safeguarding against cyber threats, my DNS Filtering Service provides granular control over web content, offering a seamless and efficient way to protect networks from phishing attempts, malware, and other online hazards. Elevate your cybersecurity posture with this indispensable tool, fortifying your digital infrastructure against the ever-evolving landscape of cyber threats. ",
    DNS_Filtering_ServiceeGithub : "",
    DNS_Filtering_ServiceWebsite : "",

    Youtube_Analysis_ToolDesc :"A cutting-edge social media analysis tool designed to decipher the sentiment behind videos and comments! 🚀📊 Harnessing advanced algorithms, this tool sifts through the digital chatter, revealing the pulse of positivity or negativity. 🌐✨ Whether it's gauging the mood around a video or decoding the sentiment in comments, my tool provides valuable insights for a comprehensive understanding of online interactions. Unleash the power of data-driven sentiment analysis and explore the emotional landscape of your content! ",
    Youtube_Analysis_ToolGithub:"",
    Youtube_Analysis_ToolWebsite:"",
    
    Hardware_ForensicsDesc:"A Portable, Virtualized Intel NUC (Next Unit of Computing) device with the following features memory Forensics Disk Forensics Network Forensics Multi - operating system support (Windows, Linux) User-friendly Tool Launcher Interface to launch a comprehensive set of forensic tools on each OS platform for investigation Detailed PDF report for each investigative session. Integrated with cloud storage to save data and findings of investigation.",
    HardwareGithub:"",
    HardwareWebsite:"",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        {/* <img className='projectPhoto' src={projectPhoto} alt="Project display" />  */}
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />
{/* 
            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a style={{display:show}} href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
        </div>
    </div>
  )
}

export default  ProjectBox