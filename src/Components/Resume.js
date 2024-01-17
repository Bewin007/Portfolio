import React, { useState } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setWid] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  const handleResize = () => {
    setWid(window.innerWidth);
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  return (
    <div className='ResumePage'>
      <Document file={pdf} className="resumeview" onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
        ))}
      </Document>

      <a href={pdf} target='_blank' download="Devansh's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </a>
    </div>
  )
}

export default Resume;
