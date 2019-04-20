class Question {
  public score: number = 0;

  constructor(public title: string = "", public description: string = "") {
  }

  public upvote() {
    this.score++;
  }

  public downvote() {
    this.score--;
  }

  public calculateScore(): number {
    return this.score;
  }
}

export default Question;
