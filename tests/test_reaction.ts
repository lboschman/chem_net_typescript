import { describe } from "mocha";
import { expect } from "chai";
import { Reaction } from "../src/reaction";
import { Compound } from "../src/compound";


describe("Test the reaction mechanism", ()  => {
    let carbon = new Compound("C");
    let oxygen = new Compound("O");
    let co2 =  new Compound("CO2");
    let burning = new Reaction(1.0, 0.0, [carbon, oxygen, oxygen], [co2]);

    describe("All properties of the reaction should be set properly", () => {
        it("Sigma should be the one given", () => {
            expect(burning.sigma).to.equal(1.);
        });
        it("Barrier should be the one given", () => {
            expect(burning.barrier).to.equal(0.);
        });
        it("Reactants should be the same as given", () => {
            let reactants = burning.reactants;
            expect(reactants[0]).to.equal(carbon);
            expect(reactants[1]).to.equal(oxygen);
            expect(reactants[2]).to.equal(oxygen);
        });
        it("Products should be the same as the one given", () => {
            expect(burning.products[0]).to.equal(co2);
        });
    });

    describe("Initialization of the reaction with strings should also be possible", () => {
        let enzymation = new Reaction(1.0, 0.0, ['Enzyme', 'Substrate'], ['ES-complex'])
        it("Reactants should be of class Compound", () => {
            let reactants: Compound[] = enzymation.reactants;
            reactants.forEach( (value: Compound) => {
                expect(value instanceof Compound).to.equal(true);
            })
        });
        
        it("Reactants should be the same as given", () => {
            let reactants: string[] = enzymation.get_reactant_names();
            expect(reactants[0]).to.equal('Enzyme');
            expect(reactants[1]).to.equal('Substrate');
        });

        it("Reactants should all have abundance 0", () => {
            let reactants: Compound[] = enzymation.reactants;
            reactants.forEach( (value: Compound) => {
                expect(value.abundance).to.equal(0);
            });
        });

        it("Products should be the same as the one given", () => {

        });
        it("Concentrations of compounds should be set to zero", () => {

        });
    });

});