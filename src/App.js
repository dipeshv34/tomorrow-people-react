import React from 'react';
import Unsubscribe from './Unsubscribe';

function App({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
  return (
    <div className="cms-react-boilerplate__container">
      <Unsubscribe />
    </div>
  );
}

export default App;
