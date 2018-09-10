import { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from '../../client/src/components/App';

it('renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div').text()).toEqual('React App');
});
