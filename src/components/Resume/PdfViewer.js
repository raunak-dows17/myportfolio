import { Document, Page, pdfjs } from "react-pdf";

import { profile } from "../../data/content";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

function PdfViewer({ width }) {
  return (
    <Document
      file={profile.resumeUrl}
      className="d-flex justify-content-center"
    >
      <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
    </Document>
  );
}

export default PdfViewer;
