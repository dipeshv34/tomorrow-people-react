import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const targetModulesData = document.querySelectorAll(
    '.cms-react-boilerplate > script[type="application/json"]',
);
targetModulesData.forEach(({ dataset, textContent }) => {
    const root = document.getElementById(`App--${dataset.moduleInstance}`);
    return ReactDOM.render(
        <App
            portalId={dataset.portalId}
            moduleData={JSON.parse(textContent)}
            moduleInstance={dataset.moduleInstance}
        />,
        root,
    );
});

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
