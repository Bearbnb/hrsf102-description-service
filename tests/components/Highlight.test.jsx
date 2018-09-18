import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Highlight from '../../client/src/components/Highlight';

describe('<Highlight />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Highlight />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
