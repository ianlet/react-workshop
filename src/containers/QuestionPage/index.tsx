import React from "react";

import QuestionForm from "../../components/QuestionForm";
import QuestionList from "../../components/QuestionList";

import Question from "../../lib/Question";
import User from "../../lib/User";

import styles from "./styles.scss";

interface QuestionPageProps {
  user?: User;
  questions?: Question[];
}

interface QuestionPageState {
  user: User;
  questions: Question[];
}

class QuestionPage extends React.Component<QuestionPageProps, QuestionPageState> {

  constructor(props: QuestionPageProps) {
    super(props);

    this.state = {
      questions: props.questions || [],
      user: props.user || new User(),
    };
  }

  public render() {
    const { user, questions } = this.state;

    return (
      <div className={styles.questionPage}>
        <div className={styles.questionPage__list}>
          <QuestionList
            questions={questions}
            onQuestionUpvoted={(question: Question) => this.onQuestionUpvoted(question)}
            onQuestionDownvoted={(question: Question) => this.onQuestionDownvoted(question)}
          />
        </div>
        <div className={styles.questionPage__form}>
          <QuestionForm
            onQuestionAdded={(question: Question) => this.onQuestionAdded(question)}
            disabled={!user.canAskQuestions()}
          />
        </div>
      </div>
    );
  }

  private onQuestionAdded(question: Question) {
    const { user, questions } = this.state;

    questions.push(question);

    this.setState({ questions });
  }

  private onQuestionUpvoted(question: Question) {
    const { user } = this.state;

    user.onQuestionUpvoted();
    question.upvote();
    const questions = this.state.questions.map((q) => q.title === question.title ? question : q);

    this.setState({user, questions});
  }

  private onQuestionDownvoted(question: Question) {
    const { user } = this.state;

    user.onQuestionDownvoted();
    question.downvote();
    const questions = this.state.questions.map((q) => q.title === question.title ? question : q);

    this.setState({ user, questions });
  }
}

export default QuestionPage;
