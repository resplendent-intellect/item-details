/* eslint-disable react/jsx-boolean-value */
import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import AllVariations from '../variations-components/AllVariations.jsx';
import VariationItem from '../variations-components/VariationItem.jsx';
import Variation from '../variations-components/Variation.jsx';
import airPodsMax from '../data/airPodsMaxData';

const { variations } = airPodsMax;
const variation = variations[0];
const variationItem = variation.variationItems[0];
const dummyFn = () => {};

it('renders AllVariations', () => {
  shallow(<AllVariations variations={variations} />);
});

it('renders Variation', () => {
  shallow(<Variation key={1} variation={variation} />);
});

it('renders VariationItem', () => {
  shallow(<VariationItem
    item={variationItem}
    setVariationName={dummyFn}
    defaultVariation="hello"
    setDefaultVariation={dummyFn}
  />);
});
