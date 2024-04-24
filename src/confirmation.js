import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmationMain from './Confirmation-Main'
import ErrorBoundary from './components/ErrorBoundary';

const targetModulesData = document.querySelectorAll(
  '.cms-react-boilerplate > script[type="application/json"]',
);
targetModulesData.forEach(({ dataset, textContent }) => {
  const root = document.getElementById(`Confirmation--${dataset.moduleInstance}`);
  return ReactDOM.render(
    <ErrorBoundary>
      <ConfirmationMain
        portalId={dataset.portalId}
        moduleData={JSON.parse(textContent)}
        moduleInstance={dataset.moduleInstance}
      />
    </ErrorBoundary>,
    root,
  );
});