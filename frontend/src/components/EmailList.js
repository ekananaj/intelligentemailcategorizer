import React, { useState, useEffect } from 'react';

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/emails')
      .then(response => response.json())
      .then(data => setEmails(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Email List</h2>
      <ul>
        {emails.map(email => (
          <li key={email.id}>{email.subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmailList;
