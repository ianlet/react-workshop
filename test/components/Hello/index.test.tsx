import React from "react";
import { shallow, mount, render  } from "enzyme";

import Hello from "../../../src/components/Hello";

describe("<Hello />", function() {
  const NAME = "John";

  it(`should say hello to ${NAME}`, () => {
    const wrapper = shallow(<Hello name={NAME} />);
    expect(wrapper).toIncludeText(`Hello, ${NAME}!`);
  });
});
