import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import ShortenText from './react-shorten-text/index'

const superLongText = 'превысокомногорассмотрительствующий'

function TestApp() {
  return (
    <table className='table'>
      <tbody>
        {(() => {
          const rows = [];

          for (let i = 0; i < 2000; i++) {
            rows.push(<tr key={i}>
              <td><ShortenText tailLength={5}>{superLongText}</ShortenText></td>
              <td><ShortenText tailLength={5}>{superLongText}</ShortenText></td>
            </tr>);
          }

          return rows;
        })()}
      </tbody>
    </table>
  )
}

ReactDOM.render(<TestApp />, document.getElementById('root'));
