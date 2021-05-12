import React from 'react';
import Counter from "./Counter";
import Enzyme, {shallow} from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({adapter : new EnzymeAdapter() });

test('renders non-empty Counter without crashing', () => {
const wrapper = shallow(<Counter />);
const counterDisplay = wrapper.find("[data-test='counter']");
expect(counterDisplay.length).toBe(1)
});


test('counter value starts at 0', () =>{
const wrapper = shallow(<Counter />);
const counterVal = wrapper.find("[data-test='counter-val']").text();
expect(counterVal).toBe("0")
}); 