import React from 'react';
import ReactDOM from 'react-dom';
import Confirmation from './pages/confirmation';

const root = ReactDOM.createRoot(document.getElementById(
    `confirmation__module--${dataset.moduleInstance}`,
));
root.render(<Confirmation />);