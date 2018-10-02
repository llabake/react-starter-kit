import React from 'react';
import { render } from 'react-dom';
import AppComponent from './app/AppComponent.jsx';

render(
  <AppComponent />,
  window.document.getElementById('app-container')
);