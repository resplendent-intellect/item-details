/* eslint-disable react/jsx-boolean-value */
import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import StockShipping from '../stock-shipping-components/StockShipping.jsx';
import EstimatesPopup from '../stock-shipping-components/EstimatesPopup.jsx';

const dummyFn = () => {};

it('renders StockShipping', () => {
  shallow(<StockShipping inStock="in-stock" />);
});

it('renders EstimatesPopup', () => {
  shallow(<EstimatesPopup
    showEstimatesPopup={false}
    setShowEstimatesPopup={dummyFn} />);
});

test('showEstimatesPopup should be false initially', () => {
  const wrapper = shallow(<StockShipping inStock="in-stock" />);
  expect(wrapper.find(EstimatesPopup).length).toEqual(1);
  expect(wrapper.find(EstimatesPopup).prop('showEstimatesPopup')).toBe(false);
});

test('Estimates link opens popup', () => {
  const wrapper = mount(<StockShipping inStock="in-stock" />);
  expect(wrapper.find(EstimatesPopup).length).toEqual(1);
  expect(wrapper.find(EstimatesPopup).prop('showEstimatesPopup')).toBe(false);
  wrapper.find('a').simulate('click');
  expect(wrapper.find(EstimatesPopup).prop('showEstimatesPopup')).toBe(true);
});
