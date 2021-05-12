import React from 'react';
import Counter from './Counter';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders non-empty Counter without crashing', () => {
  const wrapper = shallow(<Counter />);
  const counterDisplay = wrapper.find("[data-test='counter']");
  expect(counterDisplay.length).toBe(1);
});

test('counter value starts at 0', () => {
  const wrapper = shallow(<Counter />);
  const counterVal = wrapper.find("[data-test='counter-val']").text();
  expect(counterVal).toBe('0');
});

test('increment counter value, on click of increment btn', () => {
  // find increment btn
  const wrapper = shallow(<Counter />);
  const incrementBtn = wrapper.find("[data-test='increment-btn']");

  // click increment btn
  incrementBtn.simulate('click');

  // increment and test the value of counter value
  const counterVal = wrapper.find("[data-test='counter-val']").text();
  expect(counterVal).toBe('1');
});

test('decrement counter value, on click of decrement btn', () => {
  //find decrement btn
  const wrapper = shallow(<Counter />);
  const decrementBtn = wrapper.find("[data-test='decrement-btn']");

  // click decrement btn
  decrementBtn.simulate('click');

  // increment the counter value
  const counterVal = wrapper.find("[data-test='counter-val']").text();
  expect(counterVal).toBe('-1');
});
