import { storiesOf } from '@storybook/react';
import React from 'react';

import brand from './colors/_brand.scss';
import tints from './colors/_tints.scss';
import { Display } from './typography/display';
storiesOf('01 — Identity/Colors', module).add('Brand', () => {
  return (
    <div>
      <div>
        <Display>Brand Colors</Display>
        {Object.keys(brand).map((key) => (
          <div style={{ backgroundColor: brand[key], color: 'white', padding: '2rem' }}>
            <p>{key}</p>
          </div>
        ))}
      </div>
      <div>
        <Display>Tint Colors</Display>
        {Object.keys(tints).map((key) => (
          <div style={{ backgroundColor: tints[key], color: 'white', padding: '2rem' }}>
            <p>{key}</p>
          </div>
        ))}
      </div>
    </div>
  );
});
