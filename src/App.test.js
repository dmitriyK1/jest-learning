import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import jest from 'jest';
import render from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

  const temp = render.create(<App />).toJSON();
    console.log(temp);

  expect(temp).toMatchSnapshot();
});
