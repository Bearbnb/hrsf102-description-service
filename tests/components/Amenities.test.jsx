import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Amenities from '../../client/src/components/Amenities';

describe('<Amenities />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Amenities amenities={{}} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
