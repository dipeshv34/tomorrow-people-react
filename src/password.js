import React from 'react';
import ReactDOM from 'react-dom';
import Password from './pages/password';

const preRenderedDataNodes = document.querySelectorAll(
    '.password > script[type="application/json"]',
);

preRenderedDataNodes.forEach(({ dataset, textContent }) => {
    const root = document.getElementById(
        `password__module--${dataset.moduleInstance}`,
    );
    return ReactDOM.render(
        <Password />,
        root,
    );
});