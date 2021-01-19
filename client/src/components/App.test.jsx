import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Render components', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });
  });

  it('render title of App', () => {
    expect(wrapper.find('h1').text()).toContain('Hello from App.jsx');
  });
});
