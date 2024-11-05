import React from 'react';
import EmailList from './components/EmailList';
import EmailViewer from './components/EmailViewer';
import SummaryViewer from './components/SummaryViewer';

function App() {
  return (
    <div>
      <h1>Intelligent Email Categorizer</h1>
      <EmailList />
      <EmailViewer />
      <SummaryViewer />
    </div>
  );
}

export default App;
