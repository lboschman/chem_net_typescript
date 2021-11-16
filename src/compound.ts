export class Compound {
    name: string; // The name of the compound
    abundance: number; // the abundance/concentration of the compounds

    constructor(name: string, abundance = 0) {
        this.name = name;
        this.abundance = abundance;
    }
}
