import React from 'react';
import ReactDOM from 'react-dom';
import Confirmation from './pages/confirmation';

const root = ReactDOM.createRoot(document.getElementById(
    `confirmation--${dataset.moduleInstance}`,
));
root.render(<Confirmation />);