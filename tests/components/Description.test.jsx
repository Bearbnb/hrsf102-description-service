import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Description from '../../client/src/components/Description';

describe('<Description />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Description />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
