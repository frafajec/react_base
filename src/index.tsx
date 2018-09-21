import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'components/App/App';

import registerServiceWorker from 'utils/registerServiceWorker';

import 'styles/index.scss';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
