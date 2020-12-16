import React from "react";
import { shallow } from "enzyme";

import Button from "./button";

describe("<Button />", () => {
  it("Should call props.onClick when the button is clicked", () => {
    const mockFunction = jest.fn(() => {
      console.log("click");
    });
    const wrapper = shallow(<Button onClick={mockFunction} />);
    wrapper.find("button").simulate("click");
    expect(mockFunction.mock.calls.length).toBe(1);
  });
});
