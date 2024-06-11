import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({ projectName}) => {
  const desc = {
    Guided_Project_PlatformDesc: "Developed a comprehensive guided projects portal using Django and Django REST Framework, enhancing the learning experience with robust backend services and secure data management via PostgreSQL. Implemented a dynamic and user-friendly frontend with React JS and Tailwind CSS, ensuring seamless user interactions and an intuitive interface for learners. Utilized Docker for containerization to provide users with the necessary tools and environment, ensuring consistency, scalability, and streamlined deployment processes.",
    Guided_Project_PlatformGithub: "",
    Guided_Project_PlatformWebsite: "",
  
    Attendance_System_for_KHacksDesc: "Developed an attendance and project tracking system for KHacks, featuring club-wise attendance management, project progress tracking, and real-time member activity insights. 📊 This system is designed to support the organization's need for precise data management and enhanced operational efficiency. The tech stack for this project includes Django and Django REST Framework for robust backend services, React JS and Chakra UI for a dynamic and user-friendly frontend, and PostgreSQL for secure and efficient data storage. As a backend developer, I implemented secure user authentication, access controls, and time tracking functionalities, and managed the API development for attendance and project data interactions, ensuring that the system is both efficient and scalable.",
    Attendance_System_for_KHacksGithub: "",
    Attendance_System_for_KHacksWebsite: "",
  
    Sentiment_AnalysisDesc: "Developed a comprehensive system for extracting and analyzing audio transcripts from videos, involving speech-to-text conversion, sentiment analysis of the audio, and aggregation of YouTube comments for sentiment evaluation. Utilized Django and Django REST Framework (DRF) for robust backend development, coupled with React JS and Chakra UI for creating a responsive and user-friendly front-end interface. As the sole project member, handled all phases of the project including integration of speech-to-text technology, text preprocessing, sentiment analysis using machine learning techniques, and data visualization of sentiment results. Employed tools such as NLTK for natural language processing tasks, enhancing the system's accuracy and efficiency in processing and analyzing textual data.",
    Sentiment_AnalysisGithub: "",
    Sentiment_AnalysisWebsite: "",
  
    Translation_of_Book_PDFDesc: "Developed a web-based e-library platform for storing, translating, and reading books in PDF format. 📚 The platform features capabilities for PDF parsing, text translation through APIs, and a user-friendly interface for book management and reading. Employed a robust tech stack including Python, Django RestFramework for backend operations, React for frontend development, and JavaScript for interactive elements, alongside Gemeni API for translation functionality. Focused on backend development, specifically on building the PDF parsing system, integrating translation APIs, and constructing a comprehensive database system for efficient storage and retrieval of digital books. Created as part of the Google Solution Challenge, demonstrating innovation and addressing real-world needs through technology.",
    Translation_of_Book_PDFGithub: "",
    Translation_of_Book_PDFWebsite: "",
  
    DNS_Filtering_ServiceDesc: "Developed a DNS Filtering Service using Threat Intelligence feeds and AI/ML techniques, achieving high accuracy rates in threat identification. 🔒 Implemented backend infrastructure including PCAP analysis, Zeek analysis, log parsing, and regex blocking mechanisms for network traffic analysis. Designed an intuitive frontend interface powered by Grafana to visualize network traffic and threat insights, seamlessly integrated with the Unbound DNS server. Employed a robust tech stack including Python, Django RestFramework for backend operations, React for frontend development, and JavaScript for interactive elements, alongside Grafana for visualization. Created for the Smart India Hackathon (SIH) 2023.",
    DNS_Filtering_ServiceGithub: "",
    DNS_Filtering_ServiceWebsite: "",
  
    To_Do_and_Password_ManagerDesc: "Implemented features for task management and password storage, allowing users to add, edit, and delete tasks, as well as securely store and manage passwords. Designed a responsive and intuitive user interface using HTML and CSS for seamless interaction across devices. Utilized Node.js packages such as Express.js for server-side routing and MongoDB for database storage, ensuring scalability and data persistence.",
    To_Do_and_Password_ManagerGithub: "",
    To_Do_and_Password_ManagerWebsite: "",
  
    Hardware_Forensic_SuiteDesc: "A Portable, Virtualized Intel NUC (Next Unit of Computing) device with the following features: Memory Forensics, Disk Forensics, Network Forensics, Multi-operating system support (Windows, Linux), User-friendly Tool Launcher Interface to launch a comprehensive set of forensic tools on each OS platform for investigation, Detailed PDF report for each investigative session. Integrated with cloud storage to save data and findings of investigation. Created for the Kavach 2023 Hackathon.",
    Hardware_Forensic_SuiteGithub: "",
    Hardware_Forensic_SuiteWebsite: "",
  
    Idea_BankDesc: "Designed and developed the Idea Bank application to facilitate idea sharing and collaboration. 💡 Tech stack used: React for frontend development, PostgreSQL for the database, and Django Rest Framework (DRF) for backend operations. Implemented RESTful APIs using Django Rest Framework (DRF) for seamless communication between the frontend and backend components of the Idea Bank application.",
    Idea_BankGithub: "",
    Idea_BankWebsite: "",
  
    Workout_TrackerDesc: "Implemented computer vision algorithms using OpenCV to detect and recognize different workout exercises, including push-ups, pull-ups, squats, and walking. Utilized TensorFlow for machine learning-based pose estimation to accurately count repetitions and assess exercise form. Designed a user-friendly interface using Tkinter for easy navigation and interaction with the application. Integrated features for real-time feedback and visualizations to provide users with insights into their workout performance.",
    Workout_TrackerGithub: "",
    Workout_TrackerWebsite: ""
  }
  
  
  

  let show ='';
  if(desc[projectName + 'Website']===""){
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

            {/* <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a style={{display:show}} href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button> 
            </a>*/}
        </div>
    </div>
  )
}

export default  ProjectBox