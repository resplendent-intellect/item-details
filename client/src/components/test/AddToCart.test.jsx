/* eslint-disable react/jsx-boolean-value */
import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import AddToCart from '../addtocart-components/AddToCart.jsx';
import CartModal from '../addtocart-components/CartModal.jsx';
import SavePopup from '../addtocart-components/SavePopup.jsx';
import ComparePopup from '../addtocart-components/ComparePopup.jsx';
import airPodsMax from '../data/airPodsMaxData';

const dummyObj = {};
const dummyFn = () => {};

it('renders AddToCart', () => {
  shallow(<AddToCart product={{}} />);
});

test('showCartModal should be false initially', () => {
  const wrapper = shallow(<AddToCart product={{}} />);
  expect(wrapper.find(CartModal).length).toEqual(1);
  expect(wrapper.find(CartModal).prop('showCartModal')).toBe(false);
});

test('Add to cart button opens the modal', () => {
  const wrapper = shallow(<AddToCart product={{}} />);
  expect(wrapper.find(CartModal).length).toEqual(1);
  expect(wrapper.find(CartModal).prop('showCartModal')).toBe(false);
  wrapper.find('button').simulate('click');
  expect(wrapper.find(CartModal).prop('showCartModal')).toBe(true);
});

test('Save button opens the pop up', () => {
  const wrapper = shallow(<AddToCart product={{}} />);
  expect(wrapper.find(SavePopup).length).toEqual(1);
  expect(wrapper.find(SavePopup).prop('showSavePopup')).toBe(false);
  wrapper.find('.save').simulate('click');
  expect(wrapper.find(SavePopup).prop('showSavePopup')).toBe(true);
});

test('Compare button opens the pop up', () => {
  const wrapper = shallow(<AddToCart product={{}} />);
  expect(wrapper.find(ComparePopup).length).toEqual(1);
  expect(wrapper.find(ComparePopup).prop('showComparePopup')).toBe(false);
  wrapper.find('.compare').simulate('click');
  expect(wrapper.find(ComparePopup).prop('showComparePopup')).toBe(true);
});

test('Cart modal renders', () => {
  shallow(<CartModal
    showCartModal={true}
    closeCartModal={dummyFn}
    product={airPodsMax}
  />);
});

test('Save popup renders', () => {
  shallow(<SavePopup
    showSavePopup={true}
    setShowSavePopup={dummyFn}
  />);
});
