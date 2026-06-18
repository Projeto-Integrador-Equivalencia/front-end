import React from 'react';
import { FileText, Image, FileDown, Eye } from 'lucide-react';

interface DocumentItem {
  id: number;
  requestId: number;
  path: string;
  createdAt: string;
  updatedAt: string;
}

interface AttachedDocumentsProps {
  documents?: DocumentItem[];
}

export const AttachedFiles: React.FC<AttachedDocumentsProps> = ({ documents = [] }) => {
  
  
  const getFileInfo = (path: string) => {
    
    const cleanName = path.replace(/^[a-f0-9]+-/, '');
    const extension = path.split('.').pop()?.toLowerCase() || '';
    
    return { cleanName, extension };
  };

  
  const renderIcon = (extension: string) => {
    const baseIconClass = "w-10 h-10";
    
    if (extension === 'pdf') {
      return (
        <div className="text-red-500 bg-red-50 p-2 rounded">
          <FileText className={baseIconClass} fill="currentColor" fillOpacity={0.1} />
        </div>
      );
    }
    
    if (['jpg', 'jpeg', 'png', 'webp'].includes(extension)) {
      return (
        <div className="text-teal-600 bg-teal-50 p-2 rounded">
          <Image className={baseIconClass} fill="currentColor" fillOpacity={0.1} />
        </div>
      );
    }

    return (
      <div className="text-gray-500 bg-gray-50 p-2 rounded">
        <FileDown className={baseIconClass} />
      </div>
    );
  };

  if (!documents || documents.length === 0) {
    return null;
  }

  return (
    <div className="w-full font-sans">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Documentação Anexada
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {documents.map((doc) => {
          const { cleanName, extension } = getFileInfo(doc.path);
          
          
          const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
          
          
          const downloadUrl = `${baseUrl}/requests/uploads/${doc.path}`; 

          return (
            <a
              key={doc.id}
              href={downloadUrl}
              download={cleanName}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors group relative cursor-pointer"
              title={`Visualizar/Baixar ${cleanName}`}
            >
              <div className="flex items-center gap-3 overflow-hidden mr-6">
                {renderIcon(extension)}
                
                <span className="text-sm font-semibold text-gray-700 truncate">
                  {cleanName}
                </span>
              </div>

              <div className="text-blue-500 shrink-0">
                <Eye className="w-5 h-5 stroke-[2.5]" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};