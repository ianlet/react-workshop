import Question from "./Question";

class User {
  constructor(public reputation: number = 0) {
  }

  public onQuestionUpvoted() {
    this.reputation++;
  }

  public onQuestionDownvoted() {
    this.reputation--;
  }

  public canAskQuestions(): boolean {
    return this.reputation >= 0;
  }
}

export default User;
