import React from 'react';
import ReactDOM from 'react-dom';
import ThankYou from './pages/ThankYou';

const root = ReactDOM.createRoot(document.getElementById(
    `thank-you__module--${dataset.moduleInstance}`,
));
root.render(<ThankYou />);