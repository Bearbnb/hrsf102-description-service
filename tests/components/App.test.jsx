import { shallow, mount } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import App from '../../client/src/components/App';

describe('<App />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call componentDidMount once', () => {
    const spy = jest.spyOn(App.prototype, 'componentWillMount');
    const wrapper = mount(<App />);

    wrapper.instance().componentWillMount();
    expect(spy).toHaveBeenCalled();
  });
});
