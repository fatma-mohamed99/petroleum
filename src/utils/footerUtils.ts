export const  openPdfInNewTab = (pdfPath:string) => {
    window.open(pdfPath, '_blank');
  };





  export const  downloadPdf = (pdfPath:string, title:string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  
