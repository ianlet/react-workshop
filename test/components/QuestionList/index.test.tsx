import React from "react";

import { shallow, ShallowWrapper } from "enzyme";

import QuestionList from "../../../src/components/QuestionList";
import Vote from "../../../src/components/Vote";

import Question from "../../../src/lib/Question";

describe("<QuestionList />", () => {
  let questionList: ShallowWrapper;
  let onQuestionUpvoted: (question: Question) => void;
  let onQuestionDownvoted: (question: Question) => void;

  describe("Without question", () => {
    beforeEach(() => {
      onQuestionUpvoted = jest.fn();
      onQuestionDownvoted = jest.fn();

      questionList = shallow((
        <QuestionList
          questions={[]}
          onQuestionUpvoted={onQuestionUpvoted}
          onQuestionDownvoted={onQuestionDownvoted}
        />
      ));
    });

    it("should not list any question item", () => {
        expect(questionList.find({"data-test-id": "question-item"})).toHaveLength(0);
    });
  });

  describe("With one question", () => {
    let question: Question;

    beforeEach(() => {
      question = new Question("question 1");

      onQuestionUpvoted = jest.fn();
      onQuestionDownvoted = jest.fn();

      questionList = shallow((
        <QuestionList
          questions={[question]}
          onQuestionUpvoted={onQuestionUpvoted}
          onQuestionDownvoted={onQuestionDownvoted}
        />
      ));
    });

    it("should list one question item", () => {
        expect(questionList.find({"data-test-id": "question-item"})).toHaveLength(1);
    });

    describe("On upvote", () => {
      it("should upvote the question", () => {
        questionList.find({"data-test-id": "vote"}).simulate("upvote");

        expect(onQuestionUpvoted).toBeCalledWith(question);
      });
    });

    describe("On downvote", () => {
      it("should downvote the question", () => {
        questionList.find({"data-test-id": "vote"}).simulate("downvote");

        expect(onQuestionDownvoted).toBeCalledWith(question);
      });
    });
  });
});
