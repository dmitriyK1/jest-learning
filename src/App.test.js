import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import renderer from 'react-test-renderer';
// import Message from './Message';

describe('shallow render App', () => {
  let wrapper;
  const value = 777;

  beforeEach(() => {
    wrapper = shallow(<App value={value} />);
  });

  it('renders shallowly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('contains App-header', () => {
    const className = wrapper.find('header').prop('className');

    expect(className).toEqual('App-header');
  });

  it('contains proper input value', () => {
    const value = wrapper.find('input').prop('value');

    expect(value).toBe(value);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

// it('renders without crashing', () => {
//   shallow(<App />);
// });

// it('snapshot matches to stored snapshot', () => {
//     const tree = render.create(<App />).toJSON();
//
//     expect(tree).toMatchSnapshot();
// });

// it('contains greeting message', () => {
//   const wrapper = shallow(<App />);
//   const message = <Message />;
//
//   expect(wrapper).toContainReact(message);
// });
