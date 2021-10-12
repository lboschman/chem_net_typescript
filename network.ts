import { Reaction } from "./reaction";
import { Compound } from "./compound";

class Network {
    temperature: number;
    reactions: Reaction[];

    constructor(temperature=300) {
        this.reactions = [];
        this.temperature
    }

    get_compounds(): Compound[] {
        let compound_list: Compound[];

        this.reactions.forEach( function (value) {
                value.reactants.forEach( function (value) {add_if_new(value, compound_list)} );
                value.products.forEach( function (value) {add_if_new(value, compound_list)} );
            }
        )

        return compound_list;
    }

    add_reaction(reaction: Reaction): void {
        this.reactions.push(reaction)
    }
}

let add_if_new = function (item, itemlist) {
    if (!itemlist.includes(item)) {
        itemlist.push(item)
    }
}