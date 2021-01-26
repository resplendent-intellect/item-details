import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Price from '../price-components/Price.jsx';
import PriceMatch from '../price-components/PriceMatch.jsx';
import PriceMatchPopup from '../price-components/PriceMatchPopup.jsx';
import PriceModal from '../price-components/PriceModal.jsx';
import Returns from '../price-components/Returns.jsx';

it('renders AddToCart', () => {
  shallow(<Price price={100} />);
});

it('renders PriceMatch', () => {
  shallow(<PriceMatch />);
});

it('renders Returns', () => {
  shallow(<Returns />);
});

test('showPriceModal should be false initially', () => {
  const wrapper = shallow(<Price price={100} />);
  expect(wrapper.find(PriceModal).length).toEqual(1);
  expect(wrapper.find(PriceModal).prop('showPriceModal')).toBe(false);
});

test('Show me how button opens the modal', () => {
  const wrapper = mount(<Price price={100} />);
  expect(wrapper.find(PriceModal).length).toEqual(1);
  expect(wrapper.find(PriceModal).prop('showPriceModal')).toBe(false);
  wrapper.find('.showMeHow').simulate('click');
  expect(wrapper.find(PriceModal).prop('showPriceModal')).toBe(true);
});

test('Price Match Guarantee link opens popup', () => {
  const wrapper = mount(<PriceMatch />);
  expect(wrapper.find(PriceMatchPopup).length).toEqual(1);
  expect(wrapper.find(PriceMatchPopup).prop('showPricePopup')).toBe(false);
  wrapper.find('a').simulate('click');
  expect(wrapper.find(PriceMatchPopup).prop('showPricePopup')).toBe(true);
});
