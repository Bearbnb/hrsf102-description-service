import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import AmenitiesDisplay from '../../client/src/components/AmenitiesDisplay';

describe('<AmenitiesDisplay />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<AmenitiesDisplay amenities={{}} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should run showAmenities if the backdrop is clicked', () => {
    const baseProps = {
      amenities: {},
      showAmenities: jest.fn(),
    };

    const wrapper = shallow(
      <AmenitiesDisplay {...baseProps} />,
    );

    wrapper.find('button').first().simulate('click');

    expect(baseProps.showAmenities).toHaveBeenCalledTimes(1);
  });
});
