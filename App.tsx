import * as React from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import { store } from './src/store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
