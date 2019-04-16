import Abf from "../abf/Abf";
import CoverageEngine from "./CoverageEngine";
import InsuranceCoverage from "./InsuranceCoverage";
import LegacyCoverageEngine from "./LegacyCoverageEngine";

class CoverageService {
    private coverageEngine: CoverageEngine;

    constructor() {
        this.coverageEngine = new LegacyCoverageEngine();
    }
    async computeCoverage(abf: Abf): Promise<InsuranceCoverage> {
        return this.coverageEngine.computeCoverage(abf.salary, abf.kids, abf.zipCode);
    }
}

export default CoverageService;
