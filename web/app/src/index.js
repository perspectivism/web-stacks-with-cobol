import React from 'react';
import ReactDOM from 'react-dom';
import TaxPayerApp from './TaxPayerApp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TaxPayerApp />, document.getElementById('root'));
registerServiceWorker();
