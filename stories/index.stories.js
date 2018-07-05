import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../src/client/configureStore';

import App from '../src/client/app';

const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('App', module).add('App', () => (
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
));