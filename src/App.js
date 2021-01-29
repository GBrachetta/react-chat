import { ChatEngine } from 'react-chat-engine';
import './App.css';

import React from 'react';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName="Guillermo"
      userSecret={process.env.REACT_APP_SECRET}
    />
  );
};

export default App;
