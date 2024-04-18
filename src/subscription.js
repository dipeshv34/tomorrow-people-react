import React from 'react';
import ReactDOM from 'react-dom';
import SubsCription from './pages/subscription';

const preRenderedDataNodes = document.querySelectorAll(
    '.subscription > script[type="application/json"]',
);

preRenderedDataNodes.forEach(({ dataset, textContent }) => {
    const root = document.getElementById(
        `subscription__module--${dataset.moduleInstance}`,
    );
    return ReactDOM.render(
        <SubsCription />,
        root,
    );
});