import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import ListingStats from '../../client/src/components/ListingStats';

describe('<ListingStats />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<ListingStats />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
