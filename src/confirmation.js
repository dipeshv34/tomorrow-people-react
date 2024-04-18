import React from 'react';
import ReactDOM from 'react-dom';
import Confirmation from './pages/confirmation';

const preRenderedDataNodes = document.querySelectorAll(
    '.confirmation > script[type="application/json"]',
);

preRenderedDataNodes.forEach(({ dataset, textContent }) => {
    const root = document.getElementById(
        `confirmation__module--${dataset.moduleInstance}`,
    );
    return ReactDOM.render(
        <Confirmation />,
        root,
    );
});