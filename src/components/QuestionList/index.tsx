import React from "react";

import Vote from "../Vote";

import Question from "../../lib/Question";

import styles from "./styles.scss";

interface QuestionListProps {
  questions: Question[];
  onQuestionUpvoted: (question: Question) => void;
  onQuestionDownvoted: (question: Question) => void;
}

interface QuestionListState {
}

class QuestionList extends React.Component<QuestionListProps, QuestionListState> {
  constructor(props: QuestionListProps) {
    super(props);
  }

  public render() {
    const { questions } = this.props;

    return (
      <div className={styles.questionList}>
        {questions.map((question) => this.renderQuestion(question))}
      </div>
    );
  }

  private renderQuestion(question: Question) {
    return (
      <div className={styles.questionItem} key={question.title} data-test-id="question-item">
        <Vote
          score={question.calculateScore()}
          onUpvote={() => this.upvoteQuestion(question)}
          onDownvote={() => this.downvoteQuestion(question)}
          data-test-id="vote"
        />
        <div className={styles.question}>
          <h1>{question.title}</h1>
          <p>{question.description}</p>
        </div>
      </div>
    );
  }

  private upvoteQuestion(question: Question) {
    this.props.onQuestionUpvoted(question);
  }

  private downvoteQuestion(question: Question) {
    this.props.onQuestionDownvoted(question);
  }
}

export default QuestionList;
