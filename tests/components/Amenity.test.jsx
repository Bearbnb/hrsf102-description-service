import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Amenity from '../../client/src/components/Amenity';

describe('<Amenity />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Amenity />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
