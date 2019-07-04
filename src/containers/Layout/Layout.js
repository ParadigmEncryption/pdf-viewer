import React from 'react';
import './Layout.css';
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import WebviewerBackend from '../../backends/webviewer';

function Layout() {
  return (
    <div className="Layout">
      <PDFViewer
        backend={WebviewerBackend}
        src='/myPDF.pdf'
      />
    </div>
  );
}

export default Layout;
