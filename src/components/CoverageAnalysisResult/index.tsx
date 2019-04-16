import React from "react";
import Abf from "../../lib/abf/Abf";
import InsuranceCoverage from "../../lib/coverage/InsuranceCoverage";

interface CoverageAnalysisResultProps {
    abf: Abf;
    coverage: InsuranceCoverage;
}

const CoverageAnalysisResult = ({abf, coverage}: CoverageAnalysisResultProps) => {
    return (
        <div>
            <div>
                <h2>Your current financial state</h2>
                <p>Salary: {abf.salary}</p>
                <p>Number of kids: {abf.kids}</p>
                <p>ZipCode: {abf.zipCode}</p>
            </div>

            <div>
                <h2>We suggest the following coverage</h2>
                <p>Temporary coverage: {coverage.temporaryCoverage} over {coverage.temporaryCoverageTimeInYears} years</p>
                <p>Permanent coverage: {coverage.permanentCoverage}</p>
            </div>
        </div>
    );
};

export default CoverageAnalysisResult;
