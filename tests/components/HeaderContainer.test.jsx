import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import HeaderContainer from '../../client/src/components/HeaderContainer';

describe('<HeaderContainer />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<HeaderContainer />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
