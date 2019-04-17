import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import ShortenText from './react-shorten-text/index'

const superLongText = 'превысокомногорассмотрительствующий'

function TestApp() {
  return (
    <table className='table'>
      <tbody>
        {''.padStart(200, ' ').split('').map((s, i) => (
          <tr key={i}>
            <td><ShortenText>{superLongText}</ShortenText></td>
            <td><ShortenText>{superLongText}</ShortenText></td>
            <td><ShortenText>{superLongText}</ShortenText></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

ReactDOM.render(<TestApp />, document.getElementById('root'));
