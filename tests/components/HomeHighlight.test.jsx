import { shallow, mount } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import HomeHighlight from '../../client/src/components/HomeHighlight';

describe('<HomeHighlight />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<HomeHighlight />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render a div that says \'Thanks for your feedback\' when the first button is clicked', () => {
    const wrapper = mount(
      <HomeHighlight />,
    );

    wrapper.find('button').first().simulate('click');
    const renderedDiv = wrapper.find('div div').last();
    expect(renderedDiv.text()).toEqual('Thanks for your feedback.');
  });

  it('should render a div that says \'Thanks for your feedback\' when the second button is clicked', () => {
    const wrapper = mount(
      <HomeHighlight />,
    );

    wrapper.find('button').last().simulate('click');
    const renderedDiv = wrapper.find('div div').last();
    expect(renderedDiv.text()).toEqual('Thanks for your feedback.');
  });
});
