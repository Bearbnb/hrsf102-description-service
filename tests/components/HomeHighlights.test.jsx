import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import HomeHighlights from '../../client/src/components/HomeHighlights';

describe('<HomeHighlights />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<HomeHighlights />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
