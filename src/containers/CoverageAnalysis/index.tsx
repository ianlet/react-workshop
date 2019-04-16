import React from "react";
import CoverageAnalysisResult from "../../components/CoverageAnalysisResult/index";
import CoverageForm from "../../components/CoverageForm/index";
import Abf from "../../lib/abf/Abf";
import CoverageService from "../../lib/coverage/CoverageService";
import InsuranceCoverage from "../../lib/coverage/InsuranceCoverage";

interface CoverageAnalysisState {
    abf: Abf | null;
    coverage: InsuranceCoverage | null;
}

class CoverageAnalysis extends React.Component<any, CoverageAnalysisState> {
    private coverageService: CoverageService;

    constructor(props: any) {
        super(props);

        this.state = {
            abf: null,
            coverage: null
        };

        this.coverageService = new CoverageService();
    }

    private async analyzeAbf(abf: Abf) {
        this.setState({abf: null, coverage: null});
        const coverage = await this.coverageService.computeCoverage(abf);
        this.setState({abf, coverage});
    }

    render() {
        const {abf, coverage} = this.state;

        return (
            <>
                <CoverageForm submitted={abf => this.analyzeAbf(abf)}/>
                {abf != null && coverage != null ?
                    <CoverageAnalysisResult abf={abf} coverage={coverage}/>
                    : null}
            </>
        );
    }
}

export default CoverageAnalysis;
