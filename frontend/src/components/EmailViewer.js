import React from 'react';

function EmailViewer({ email }) {
  return (
    <div>
      <h2>Email Viewer</h2>
      <p>{email ? email.body : "Select an email to view"}</p>
    </div>
  );
}

export default EmailViewer;
