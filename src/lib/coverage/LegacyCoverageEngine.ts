import CoverageEngine from "./CoverageEngine";
import InsuranceCoverage from "./InsuranceCoverage";

const URL = "http://www.mocky.io/v2/5cb5435533000059105d7a07";

class LegacyCoverageEngine implements CoverageEngine {
    async computeCoverage(salary: number, kids: number, zipCode: string): Promise<InsuranceCoverage> {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({salary, kids, zipCode})
        }).then(async response => {
            const {temporaryAmount, temporaryDuration, permanentAmount} = await response.json() as any;
            const temporaryCoverageInYears = temporaryDuration / 12;
            return new InsuranceCoverage(temporaryAmount, temporaryCoverageInYears, permanentAmount);
        });
    }
}

export default LegacyCoverageEngine;
