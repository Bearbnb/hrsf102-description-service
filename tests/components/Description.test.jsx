import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Description from '../../client/src/components/Description';

describe('<Description />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Description />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render an expand button if showDescriptionExtended is false', () => {
    const wrapper = shallow(<Description showDescriptionExtended={false} />);

    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should not render an expand button if showDescriptionExtended is true', () => {
    const wrapper = shallow(<Description showDescriptionExtended={true} />);

    expect(wrapper.find('button')).toHaveLength(0);
  });
});
