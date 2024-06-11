import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiVercel} from "react-icons/si";
import { FaAws,FaAngular } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { DiDjango } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiNginx } from "react-icons/si";


const Skills = ({skill}) => {
    const icon = {
        Angular: <FaAngular/>,
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Python : <FaPython/>,
        aws :<FaAws/>,
        Electron: <IoLogoElectron/>,
        ReactNative: <TbBrandReactNative/>,
        Django: <DiDjango />,
        Html5: <FaHtml5/>,
        Css: <FaCss3/>,
        SQL: <SiPostgresql/>,
        Docker: <FaDocker />,
        Ngnix: <SiNginx/>
         
      }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
