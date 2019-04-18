import React from "react";
import { shallow, mount, render  } from "enzyme";

import CoverageForm from "../../../src/components/CoverageForm";
import Abf from "../../../src/lib/abf/Abf";

describe("<CoverageForm />", function() {
  const SALARY = 100;
  const KIDS_NUMBER = 2;
  const ZIP_CODE = "abcd";

  let submitted;

  beforeEach(() => {
    submitted = jest.fn();
  });

  it("should have no salary by default", () => {
    const coverageForm = shallow(<CoverageForm submitted={submitted} />);

    expect(coverageForm).toHaveState("salary", 0);
  });

  it("should submit the entered Abf", () => {
    const coverageForm = shallow(<CoverageForm submitted={submitted} />);

    coverageForm.find("#salary").simulate("change", { currentTarget: { value: SALARY } });
    coverageForm.find("#kids").simulate("change", { currentTarget: { value: KIDS_NUMBER } });
    coverageForm.find("#zipCode").simulate("change", { currentTarget: { value: ZIP_CODE } });
    coverageForm.find("#coverageForm").simulate("submit", { preventDefault: () => {} });

    const expectedAbf = new Abf(SALARY, KIDS_NUMBER, ZIP_CODE);
    expect(submitted).toHaveBeenCalledWith(expectedAbf);
  });
});
