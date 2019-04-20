import React from "react";

import { shallow, ShallowWrapper } from "enzyme";
import { instance, mock, when } from "ts-mockito";

import QuestionPage from "../../../src/containers/QuestionPage";

import QuestionForm from "../../../src/components/QuestionForm";
import QuestionList from "../../../src/components/QuestionList";

import Question from "../../../src/lib/Question";
import User from "../../../src/lib/User";

describe("<QuestionPage />", () => {
  let questionPage: ShallowWrapper;
  let user: User;

  describe("With user allowed to ask questions", () => {
    beforeEach(() => {
      user = mock(User);
      when(user.canAskQuestions()).thenReturn(true);

      questionPage = shallow(<QuestionPage user={instance(user)} />);
    });

    it("should not disable question form", () => {
      expect(questionPage.find(QuestionForm)).toHaveProp("disabled", false);
    });
  });

  describe("With user not allowed to ask questions", () => {
    beforeEach(() => {
      user = mock(User);
      when(user.canAskQuestions()).thenReturn(false);

      questionPage = shallow(<QuestionPage user={instance(user)} />);
    });

    it("should disable question form", () => {
      expect(questionPage.find(QuestionForm)).toHaveProp("disabled", true);
    });
  });

  describe("On question added", () => {
    let question: Question;

    beforeEach(() => {
      questionPage = shallow(<QuestionPage />);

      question = new Question("question");
      questionPage.find(QuestionForm).simulate("questionAdded", question);
    });

    it("should add question to the question list", () => {
      expect(questionPage.find(QuestionList).prop("questions")).toEqual([question]);
    });
  });
});
