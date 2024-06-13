import React from 'react';
import { CreateFeedback } from './components/CreateFeedback';
import { Feedbacks } from "./components/Feedbacks";

const App: React.FC = () => {
  return (
    <div>
      <h1>Feedback Management System</h1>
      <CreateFeedback />
      <Feedbacks feedbacks={[]} /> {/* Pass an empty array or the appropriate prop */}
    </div>
  );
};

export default App;
