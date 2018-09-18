import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Amenities from '../../client/src/components/Amenities';

describe('<Amenities />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Amenities amenities={{}} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should run hideAmenities if the backdrop is clicked', () => {
    const baseProps = {
      amenities: {},
      hideAmenities: jest.fn(),
    };

    const wrapper = shallow(
      <Amenities {...baseProps} />,
    );

    wrapper.find('div').first().simulate('click');

    expect(baseProps.hideAmenities).toHaveBeenCalledTimes(1);
  });
});
