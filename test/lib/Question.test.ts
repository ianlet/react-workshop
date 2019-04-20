import Question from "../../src/lib/Question";

describe("Question", () => {
  let question: Question;

  beforeEach(() => {
    question = new Question();
  });

  it("should initially have a score of zero", () => {
    expect(question.calculateScore()).toBe(0);
  });

  describe("Downvote", () => {
    beforeEach(() => {
      question.downvote();
    });

    it("should decrement score by one", () => {
      expect(question.calculateScore()).toBe(-1);
    });
  });

  describe("Upvote", () => {
    beforeEach(() => {
      question.upvote();
    });

    it("should increment score by one", () => {
      expect(question.calculateScore()).toBe(1);
    });
  });
});
