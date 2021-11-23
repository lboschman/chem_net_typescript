import { describe } from "mocha";
import { expect } from "chai";
import { Compound } from "../src/chemical-engine/compound";

describe("Test compounds", () => {
    const carbon = new Compound("Carbon");

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
            const oxygen = new Compound("Oygen", 1.0);
            expect(oxygen.abundance).to.equal(1.0);
        });
        it("Change abundance after initialization", () => {
            const nitrogen = new Compound("Nitrogen", 1.2);
            nitrogen.abundance = 14.4;
            expect(nitrogen.abundance).to.equal(14.4);
        });
    });
});
