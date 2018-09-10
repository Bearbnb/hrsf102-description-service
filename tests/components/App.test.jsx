import { shallow, mount, render } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import App from '../../client/src/components/App';

it('renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div').text()).toEqual('React App');
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should call componentDidMount once', () => {
  const spy = jest.spyOn(App.prototype, 'componentWillMount');
  const wrapper = mount(<App />);

  wrapper.instance().componentWillMount();
  expect(spy).toHaveBeenCalled();
});
