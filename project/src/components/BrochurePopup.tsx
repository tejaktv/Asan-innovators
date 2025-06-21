import React, { useState, useEffect } from 'react';
import { Download, X, FileText, ArrowDown } from 'lucide-react';

const BrochurePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
      setIsVisible(false);
    }, 1000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md mx-4 transform animate-in slide-in-from-top-4 duration-500">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-slate-600" />
          </button>

          {/* Content */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Download Our Brochure
            </h3>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Get detailed information about our services, case studies, and how we can help transform your business.
            </p>

            {/* Features */}
            <div className="bg-slate-50 rounded-xl p-4 mb-6">
              <div className="space-y-2 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Complete service portfolio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Client success stories</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Technology expertise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-slate-700">Contact information</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isDownloading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download PDF Brochure</span>
                </>
              )}
            </button>

            <p className="text-xs text-slate-500 mt-3">
              PDF • Free Download
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrochurePopup;