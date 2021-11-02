import { Compound } from "./compound";

function check_if_compounds(compounds: Array<any>): boolean {
    return compounds.every(function(value) {
        return value instanceof Compound
    })
}

function check_if_strings(compounds: Array<any>): boolean {
    return compounds.every(function(value) {
        return typeof(value) === "string"
    })
}

export class Reaction {
    sigma: number;
    barrier: number;
    reactants: Compound[];
    products: Compound[];

    constructor(sigma: number, barrier: number, reactants: Compound[], products: Compound[]);
    constructor(sigma: number, barrier: number, reactants: string[], products: string[]);
    constructor(sigma: number, barrier: number, reactants: any, products: any){
        // Build a reaction from strings 
        let obj_reactants: Compound[] = [];
        let obj_products: Compound[] = [];
        
        
        if (check_if_compounds(reactants)) {
            // If reactants are already Compound objects, use those.
            obj_reactants = reactants;
        } else if (check_if_strings(reactants)) {
            // If they are strings, initiate new Compounds
            reactants.forEach(function (value: string) {
                obj_reactants.push(new Compound(value));
            })
        } else {
            // If reactants are neither, throw an error
            throw new TypeError("Reactants should be all strings, or all Compounds!");
        }

        if (check_if_compounds(products)) {
            // If products are already Compound objects, use those
            obj_products = products;
        } else if (check_if_strings(products)) {
            // If products are strings, initiate new compounds
            products.forEach(function (value: string) {
                obj_products.push(new Compound(value));
            })
        } else {
            // If reactants are neither, throw an error
            throw new TypeError("Reaction products should be all strings, or all Compounds!");
        }

        this.sigma = sigma;
        this.barrier = barrier;
        this.reactants = obj_reactants;
        this.products = obj_products;
    }

    rate(t_gas: number): number {
        // Calculate the reaction rate of this reaction, at temperature t_gas
        let reaction_rate: number = this.sigma * Math.exp(-t_gas / this.barrier);
        return reaction_rate;
    }

    get_reactant_names(): string[] {
        // Get the names of all the reactants
        let names: string[] = [];

        this.reactants.forEach(function (value) {
                names.push(value.name)
            }
        )

        return names;
    }

    get_product_names(): string[] {
        // Get the names of al the products
        let names: string[];

        this.products.forEach(function (value) {
                names.push(value.name)
            }
        )

        return names;
    }
}