import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';

const FloatingBrochureButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/ASAN-Innovators-Brochure.pdf';
    link.download = 'ASAN-Innovators-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40">
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="group bg-gradient-to-r from-blue-500 to-orange-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed animate-bounce"
        title="Download Brochure"
      >
        {isDownloading ? (
          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : (
          <div className="relative">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <Download className="w-2 h-2 text-white" />
            </div>
          </div>
        )}
      </button>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Download Brochure
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
      </div>
    </div>
  );
};

export default FloatingBrochureButton;