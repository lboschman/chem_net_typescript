import { Reaction } from "./reaction";
import { Compound } from "./compound";

export class Network {
    temperature: number;
    reactions: Reaction[];

    constructor(temperature = 300) {
        this.reactions = [];
        this.temperature = temperature;
    }

    get_compounds(): Compound[] {
        const compound_list: Compound[] = [];

        this.reactions.forEach(function (value) {
            value.reactants.forEach(function (value) {
                add_if_new(value, compound_list);
            });
            value.products.forEach(function (value) {
                add_if_new(value, compound_list);
            });
        });

        return compound_list;
    }

    add_reaction(reaction: Reaction): void {
        this.reactions.push(reaction);
    }
}

const add_if_new = function (item: Compound, itemlist: Array<Compound>) {
    if (!itemlist.includes(item)) {
        itemlist.push(item);
    }
};
