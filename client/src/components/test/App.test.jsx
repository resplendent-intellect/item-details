import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Render components', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
  });

  it('Renders App', () => {
    shallow(<App />);
  });

  it('Renders all children of App', () => {
    expect(wrapper.children().length).toEqual(11);
  });
});
