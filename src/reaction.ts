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
            obj_reactants = reactants;
        } else if (check_if_strings(reactants)) {
            reactants.forEach(function (value) {
                obj_reactants.push(new Compound(value));
            })
        } else {
            throw new TypeError("Reactants should be all strings, or all Compounds!");
        }

        if (check_if_compounds(products)) {
            obj_products = products;
        } else if (check_if_strings(products)) {
            products.forEach(function (value) {
                obj_products.push(new Compound(value));
            })
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
        let names: string[];

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