import { describe } from "mocha";
import { expect } from "chai";
import { Reaction } from "../reaction";
import { Compound } from "../compound";


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
    });

});