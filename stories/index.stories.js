import React from 'react';

import { storiesOf } from '@storybook/react';
import ReactShortenText from '../src/index'

import './index.stories.css';

const LONGEST_WORD = 'превысокомногорассмотрительствующий';

storiesOf('ReactShortenText', module)
  .add('simple container with a padding', () => (
    <div className="simple-container">
      <ReactShortenText tailLength={5}>{LONGEST_WORD}</ReactShortenText>
    </div>
  ))
  .add('table with hundreds of instances', () => (
    <table className="table-container">
      <tbody>
      {(() => {
        const rows = [];

        for (let i = 0; i < 500; i++) {
          rows.push(<tr key={i}>
            <td className="table-cell">
              <ReactShortenText tailLength={5}>{LONGEST_WORD}</ReactShortenText>
            </td>
            <td className="table-cell">
              <ReactShortenText tailLength={5}>{LONGEST_WORD}</ReactShortenText>
            </td>
          </tr>);
        }

        return rows;
      })()}
      </tbody>
    </table>
  ));
