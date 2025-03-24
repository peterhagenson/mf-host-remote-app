import React from 'react';
import './ProviderComponent.css';
import { lazy } from 'react';

const Form_1a = lazy(() => import('remote_1a/Form_1a'));

const TestComponent: React.FC = () => {
  return (
    <div>
      <Form_1a />
    </div>
  );
};

export default TestComponent;
