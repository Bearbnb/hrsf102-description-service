import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Thumbs from '../../client/src/components/Thumbs';

describe('<Thumbs />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Thumbs />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
