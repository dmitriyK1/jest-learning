import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Message from './Message';
import render from 'react-test-renderer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('snapshot matches to stored snapshot', () => {
    const tree = render.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
});

it('contains greeting message', () => {
  const wrapper = shallow(<App />);
  const message = <Message />;

  expect(wrapper).toContainReact(message);
});
