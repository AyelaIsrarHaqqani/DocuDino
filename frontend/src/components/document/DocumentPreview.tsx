export const DocumentPreview: React.FC<{ file: File }> = ({ file: _file }) => {
  return (
    <div className="preview-container">
      <div className="preview-controls">
        <button>Zoom In</button>
        <button>Zoom Out</button>
      </div>
      <div className="document-viewer">
        {/* Document preview implementation */}
      </div>
    </div>
  );
};

export default DocumentPreview;
