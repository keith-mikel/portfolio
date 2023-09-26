import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const resumePdf = 'src/assets/Resume20221111.pdf'; // Replace with the path to your PDF file

  const handleDownload = () => {
    // Trigger a download of the PDF file
    window.open(resumePdf);
  };

  return (
    <div>
      <h1>Check out my Resume</h1>
      <div className="row">
        <div className="col-md-6">
          <Document file={resumePdf}>
            <Page pageNumber={1} />
          </Document>
        </div>
        <div className="col-md-6">
          <div className="mt-3">
            <button className="btn btn-primary" onClick={handleDownload}>
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
