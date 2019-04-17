import React from 'react';
import ReactDOM from 'react-dom';

function TestApp() {
  return (
    <table>
      <tbody>
        <tr><td>test value</td><td>test value</td><td>test value</td></tr>
        <tr><td>test value</td><td>test value</td><td>test value</td></tr>
        <tr><td>test value</td><td>test value</td><td>test value</td></tr>
        <tr><td>test value</td><td>test value</td><td>test value</td></tr>
        <tr><td>test value</td><td>test value</td><td>test value</td></tr>
        <tr><td>test value</td><td>test value</td><td>test value</td></tr>
      </tbody>
    </table>
  )
}

ReactDOM.render(<TestApp />, document.getElementById('root'));
