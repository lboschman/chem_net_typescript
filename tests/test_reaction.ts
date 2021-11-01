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

});