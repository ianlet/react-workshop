import React from "react";
import Abf from "../../lib/abf/Abf";

import classes from "./styles.scss";
import formClasses from "../Form/styles.scss";

interface CoverageFormProps {
    submitted(abf: Abf): void;
}

interface CoverageFormState {
    salary: number;
    kids: number;
    zipCode: string;
}

class CoverageForm extends React.Component<CoverageFormProps, CoverageFormState> {

    constructor(props: CoverageFormProps) {
        super(props);

        this.state = {
            salary: 0,
            kids: 0,
            zipCode: ""
        };
    }

    private submitAbf(event: React.FormEvent<HTMLFormElement>) {
        const {salary, kids, zipCode} = this.state;
        const abf = new Abf(salary, kids, zipCode);
        this.props.submitted(abf);

        event.preventDefault();
    }

    private handleSalaryChange(event: React.FormEvent<HTMLInputElement>) {
        const salary = parseInt(event.currentTarget.value);
        this.setState({salary});
    }

    private handleKidsChange(event: React.FormEvent<HTMLInputElement>) {
        const kids = parseInt(event.currentTarget.value);
        this.setState({kids});
    }

    private handleZipCodeChange(event: React.FormEvent<HTMLInputElement>) {
        const zipCode = event.currentTarget.value;
        this.setState({zipCode});
    }

    render() {
        const {salary, kids, zipCode} = this.state;

        return (
            <>
                <h2 className={classes.title}>Explain your situation</h2>
                <form id="coverageForm" onSubmit={e => this.submitAbf(e)}>
                    <div className={formClasses.form__field}>
                        <label className={formClasses.form__label} htmlFor="salary">Salary</label>
                        <input className={formClasses.form__input} id="salary" type="numeric" value={salary} onChange={e => this.handleSalaryChange(e)}/>
                    </div>

                    <div className={formClasses.form__field}>
                        <label className={formClasses.form__label} htmlFor="kids">How many kids</label>
                        <input className={formClasses.form__input} id="kids" type="numeric" value={kids} onChange={e => this.handleKidsChange(e)}/>
                    </div>

                    <div className={formClasses.form__field}>
                        <label className={formClasses.form__label} htmlFor="zipCode">Zip code</label>
                        <input className={formClasses.form__input} id="zipCode" value={zipCode} onChange={e => this.handleZipCodeChange(e)}/>
                    </div>

                    <input type="submit" value="Calculate my needs"/>
                </form>
            </>
        );
    }
}

export default CoverageForm;
