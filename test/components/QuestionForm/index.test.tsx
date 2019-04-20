import React from "react";

import { shallow, ShallowWrapper } from "enzyme";

import QuestionForm from "../../../src/components/QuestionForm";
import Question from "../../../src/lib/Question";

describe("<QuestionForm />", () => {
  let questionForm: ShallowWrapper;
  let onQuestionAdded: (question: Question) => void;

  beforeEach(() => {
    onQuestionAdded = jest.fn();
    questionForm = shallow(<QuestionForm onQuestionAdded={onQuestionAdded} />);
  });

  describe("With valid title and description", () => {
    beforeEach(() => {
      questionForm.find("#title").simulate("change", { currentTarget: { value: "question title" } });
      questionForm.find("#description").simulate("change", { currentTarget: { value: "question description" } });
    });

    it("should add question", () => {
      questionForm.find("#questionForm").simulate("submit", { preventDefault: () => {} });

      const expectedQuestion: Question = new Question("question title", "question description");
      expect(onQuestionAdded).toBeCalledWith(expectedQuestion);
    });
  });

  describe("With an invalid title", () => {
    beforeEach(() => {
      questionForm.find("#title").simulate("change", { currentTarget: { value: " " } });
      questionForm.find("#description").simulate("change", { currentTarget: { value: "question description" } });
    });

    it("should not add question", () => {
      questionForm.find("#questionForm").simulate("submit", { preventDefault: () => {} });

      expect(onQuestionAdded).not.toBeCalled();
    });

    it("should inform form is invalid", () => {
      questionForm.find("#questionForm").simulate("submit", { preventDefault: () => {} });

      expect(questionForm.find("#error")).toHaveLength(1);
    });
  });

  describe("With an invalid description", () => {
    beforeEach(() => {
      questionForm.find("#title").simulate("change", { currentTarget: { value: "title" } });
      questionForm.find("#description").simulate("change", { currentTarget: { value: " " } });
    });

    it("should not add question", () => {
      questionForm.find("#questionForm").simulate("submit", { preventDefault: () => {} });

      expect(onQuestionAdded).not.toBeCalled();
    });

    it("should inform form is invalid", () => {
      questionForm.find("#questionForm").simulate("submit", { preventDefault: () => {} });

      expect(questionForm.find("#error")).toHaveLength(1);
    });
  });
});
