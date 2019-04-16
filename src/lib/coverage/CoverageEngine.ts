import InsuranceCoverage from "./InsuranceCoverage";

interface CoverageEngine {
    computeCoverage(salary: number, kids: number, zipCode: string): Promise<InsuranceCoverage>;
}

export default CoverageEngine;
