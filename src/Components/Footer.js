import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by  Bewin Felix</h4>
      <h4>Copyright &copy; 2023 JS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/bewin007" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/bewin-felix-4153a9232/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:biwinfelix@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer