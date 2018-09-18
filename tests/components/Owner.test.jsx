import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Owner from '../../client/src/components/Owner';

describe('<Owner />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Owner amenities={{}} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
