import * as _ from "lodash";
import React from "react";

import Question from "../../lib/Question";

import formStyles from "../Form/styles.scss";
import styles from "./styles.scss";

interface QuestionFormProps {
  onQuestionAdded: (question: Question) => void;
  disabled?: boolean;
}

interface QuestionFormState {
  title: string;
  description: string;
  hasError: boolean;
}

class QuestionForm extends React.Component<QuestionFormProps, QuestionFormState> {

  public static defaultProps = {
    disabled: false,
  };

  constructor(props: QuestionFormProps) {
    super(props);

    this.state = {
      title: "",
      description: "",
      hasError: false,
    };
  }

  public render() {
    const { disabled } = this.props;
    const { title, description, hasError } = this.state;

    return (
      <>
        <h2>Ask a question</h2>
        <form id="questionForm" className={formStyles.form} onSubmit={(e) => this.onSubmit(e)}>
          <fieldset className={formStyles.form__fieldset} disabled={disabled}>
            {hasError && this.renderError()}
            <input
              id="title"
              className={formStyles.form__input}
              value={title}
              placeholder="Title"
              onChange={(e) => this.onTitleChange(e)}
            />
            <textarea
              id="description"
              className={formStyles.form__textarea}
              value={description}
              placeholder="Description"
              onChange={(e) => this.onContentChange(e)}
            />
            <input id="submit" className={formStyles.form__submit} type="submit" value="Ask question!" />
          </fieldset>
        </form>
      </>
    );
  }

  public renderError() {
    return (
      <div id="error" className={formStyles.form__error}>Invalid title or description!</div>
    );
  }

  private onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { title, description } = this.state;
    if (!_.trim(title) || !_.trim(description)) {
      this.setState({ hasError: true });
      return;
    }

    const question: Question = new Question(title, description);
    this.props.onQuestionAdded(question);

    this.resetForm();
  }

  private onTitleChange(e: React.FormEvent<HTMLInputElement>) {
    const title = e.currentTarget.value;
    this.setState({title});
  }

  private onContentChange(e: React.FormEvent<HTMLTextAreaElement>) {
    const description = e.currentTarget.value;
    this.setState({description});
  }

  private resetForm() {
    this.setState({
      title: "",
      description: "",
      hasError: false,
    });
  }
}

export default QuestionForm;
