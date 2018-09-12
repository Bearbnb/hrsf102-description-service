import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import AmenitiesDisplay from '../../client/src/components/AmenitiesDisplay';

describe('<AmenitiesDisplay />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<AmenitiesDisplay amenities={{}} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
