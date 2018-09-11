import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../client/src/components/Header';

describe('<Header />', () => {
  beforeEach(() => {
    const wrapper = shallow(<Header />);
  });

  it('should render Header properly', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have props passed to it', () => {
    const wrapper = shallow(<Header />);
    wrapper.setProps({
      beds: 2,
      baths: 3,
      name: 'Ridiculously Overpriced Chateau',
      ownerName: 'John Smith',
      location: 'Brooklyn',
      livingSpace: 'Condo',
    });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
