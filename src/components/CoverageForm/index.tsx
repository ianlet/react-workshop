import React from "react";
import Abf from "../../lib/abf/Abf";

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
            <form onSubmit={e => this.submitAbf(e)}>
                <label htmlFor="salary">Salary</label>
                <input id="salary" type="numeric" value={salary} onChange={e => this.handleSalaryChange(e)}/>

                <label htmlFor="kids">How many kids</label>
                <input id="kids" type="numeric" value={kids} onChange={e => this.handleKidsChange(e)}/>

                <label htmlFor="zipCode">Zip code</label>
                <input id="zipCode" value={zipCode} onChange={e => this.handleZipCodeChange(e)}/>

                <input type="submit" value="Calculate my needs"/>
            </form>
        );
    }
}

export default CoverageForm;
