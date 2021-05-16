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

describe('decrement the counter on click of decrement btn, if counter is greater than 0', () => {
  const wrapper = shallow(<Counter />);

  // click the increment btn so that counter is greater than 0
  const incrementBtn = wrapper.find("[data-test='increment-btn']");
  incrementBtn.simulate('click');

  // find decrement btn and click
  const decrementBtn = wrapper.find("[data-test='decrement-btn']");
  decrementBtn.simulate('click');

  // find display and test counter value
  const counterVal = wrapper.find("[data-test='counter-val']").text();
  expect(counterVal).toBe('0');
});

describe('error when counter goes below 0', () => {
  test('error does not show when not required', () => {
    const wrapper = shallow(<Counter />);

    const errorDiv = wrapper.find("[data-test='error-msg']");

    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(true);
  });
});

describe('counter is 0 and decrement btn is clicked', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);

    const decrementBtn = wrapper.find("[data-test='decrement-btn']");
    decrementBtn.simulate('click');
  });

  test('error shows', () => {
    const errorDiv = wrapper.find("[data-test='error-msg']");

    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(false);
  });

  test('counter still shows 0', () => {
    const counterVal = wrapper.find("[data-test='counter-val']").text();

    expect(counterVal).toBe('0');
  });

  test('clicking on increment btn removes the error message', () => {
    const incrementBtn = wrapper.find("[data-test='increment-btn']");

    incrementBtn.simulate('click');

    const errorDiv = wrapper.find("[data-test='error-msg']");

    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(true);
  });
});
