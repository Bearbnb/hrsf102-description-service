import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Header from '../../client/src/components/Header';

describe('<Header />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Header />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
