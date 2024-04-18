import React from 'react';
import ReactDOM from 'react-dom';
import Unsubscribe from './pages/unsubscribe';

const preRenderedDataNodes = document.querySelectorAll(
    '.unsubscribe > script[type="application/json"]',
);

preRenderedDataNodes.forEach(({ dataset, textContent }) => {
    const root = document.getElementById(
        `unsubscribe__module--${dataset.moduleInstance}`,
    );
    return ReactDOM.render(
        <Unsubscribe />,
        root,
    );
});