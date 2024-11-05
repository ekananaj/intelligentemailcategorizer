import React from 'react';

function SummaryViewer({ summary }) {
  return (
    <div>
      <h2>Summary</h2>
      <p>{summary || "No summary available"}</p>
    </div>
  );
}

export default SummaryViewer;
