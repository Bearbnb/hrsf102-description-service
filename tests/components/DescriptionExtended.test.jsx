import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import DescriptionExtended from '../../client/src/components/DescriptionExtended';

describe('<DescriptionExtended />', () => {
  it('should render properly', () => {
    const descriptionExtended = {
      'THE SPACE': ['THERE\'S A LOT'],
      'VERY IMPORTANT': ['TESTS ARE IMPORTANT'],
      'GUEST ACCESS': ['DRIVE THERE'],
    };

    const wrapper = shallow(<DescriptionExtended descriptionExtended={descriptionExtended} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
