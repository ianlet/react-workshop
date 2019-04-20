import User from "../../src/lib/User";
import Question from "../../src/lib/Question";

describe("User", () => {
  let user: User;

  beforeEach(() => {
    user = new User();
  });

  describe("On question upvoted", () => {
    beforeEach(() => {
      user.onQuestionUpvoted();
    });

    it("should increment reputation by 1", () => {
      expect(user.reputation).toBe(1);
    });
  });

  describe("On question downvoted", () => {
    beforeEach(() => {
      user.onQuestionDownvoted();
    });

    it("should decrement reputation by 1", () => {
      expect(user.reputation).toBe(-1);
    });
  });

  describe("With a reputation of 0", () => {
    beforeEach(() => {
      user = new User(0);
    });

    it("should be allowed to ask questions", () => {
      expect(user.canAskQuestions()).toBe(true);
    });
  });

  describe("With a positive reputation", () => {
    beforeEach(() => {
      user = new User(1);
    });

    it("should be allowed to ask questions", () => {
      expect(user.canAskQuestions()).toBe(true);
    });
  });

  describe("With a negative reputation", () => {
    beforeEach(() => {
      user = new User(-1);
    });

    it("should not be allowed to ask questions", () => {
      expect(user.canAskQuestions()).toBe(false);
    });
  });
});
