import React from 'react';
import { storiesOf } from '@storybook/react';

import ShortenText from '../src'
import { LONGEST_WORD } from './constants'

import './index.css';

const title = `Мы сократили слово "${LONGEST_WORD}", чтобы уместить его в заданную ширину`

storiesOf('ShortenText', module)
  .add('simple container with a padding', () => (
    <div className="simple-container">
      <ShortenText tailLength={5} title={title}>
        {LONGEST_WORD}
      </ShortenText>
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
              <ShortenText tailLength={5} title={title}>{LONGEST_WORD}</ShortenText>
            </td>
            <td className="table-cell">
              <ShortenText tailLength={5} title={title}>{LONGEST_WORD}</ShortenText>
            </td>
          </tr>);
        }

        return rows;
      })()}
      </tbody>
    </table>
  ));
