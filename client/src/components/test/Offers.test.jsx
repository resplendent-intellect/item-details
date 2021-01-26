/* eslint-disable react/jsx-boolean-value */
import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import Offers from '../offers-components/Offers.jsx';

it('renders Offers', () => {
  shallow(<Offers offers={[]} />);
});
