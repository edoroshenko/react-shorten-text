import React from 'react';
import ReactDOM from 'react-dom';

import ShortenText from '../../src/index'

function TestApp() {
  return (
    <table>
      <tbody>
        <tr>
          <td><ShortenText>test value</ShortenText></td>
          <td><ShortenText>test value</ShortenText></td>
          <td><ShortenText>test value</ShortenText></td>
        </tr>
        <tr>
          <td><ShortenText>test value</ShortenText></td>
          <td><ShortenText>test value</ShortenText></td>
          <td><ShortenText>test value</ShortenText></td>
        </tr><tr>
          <td><ShortenText>test value</ShortenText></td>
          <td><ShortenText>test value</ShortenText></td>
          <td><ShortenText>test value</ShortenText></td>
        </tr><tr>
          <td><ShortenText>test value</ShortenText></td>
          <td><ShortenText>test value</ShortenText></td>
          <td><ShortenText>test value</ShortenText></td>
        </tr><tr>
          <td><ShortenText>test value</ShortenText></td>
          <td><ShortenText>test value</ShortenText></td>
          <td><ShortenText>test value</ShortenText></td>
        </tr><tr>
          <td><ShortenText>test value</ShortenText></td>
          <td><ShortenText>test value</ShortenText></td>
          <td><ShortenText>test value</ShortenText></td>
        </tr>
      </tbody>
    </table>
  )
}

ReactDOM.render(<TestApp />, document.getElementById('root'));
