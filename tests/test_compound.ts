import { describe } from "mocha";
import { expect } from "chai";
import { Compound } from "../compound";



describe("Test compounds", () => {
    let carbon = new Compound("Carbon");
            
    describe("Give a name", () => {
        it("Name should be the one given", () => {
            expect(carbon.name).to.equal("Carbon");
        });
    });

    describe("Abundances should be set correctly", () => {
        it("Default abundance is 0", () => {
            expect(carbon.abundance).to.equal(0);
        });
        it("Different abundance from default in constructor", () => {
            let oxygen = new Compound("Oygen", 1.0);
            expect(oxygen.abundance).to.equal(1.0);
        })
        it("Change abundance after initialization", () => {
            let nitrogen = new Compound("Nitrogen", 1.2);
            nitrogen.abundance = 14.4;
            expect(nitrogen.abundance).to.equal(14.4);
        });
    });
});