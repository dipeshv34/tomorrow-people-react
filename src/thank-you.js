import React from 'react';
import ReactDOM from 'react-dom';
import ThankYou from './pages/ThankYou';

const preRenderedDataNodes = document.querySelectorAll(
    '.thank-you > script[type="application/json"]',
);

preRenderedDataNodes.forEach(({ dataset, textContent }) => {
    const root = document.getElementById(
        `thank-you__module--${dataset.moduleInstance}`,
    );
    return ReactDOM.render(
        <ThankYou />,
        root,
    );
});