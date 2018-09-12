import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import HomeHighlight from '../../client/src/components/HomeHighlight';

describe('<HomeHighlight />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<HomeHighlight />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
