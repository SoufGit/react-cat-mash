import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


//import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
