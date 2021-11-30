import { Store } from "vuex";
import { Compound } from "./chemical-engine/compound";
import { Reaction } from "./chemical-engine/reaction";

declare module "@vue/runtime-core" {
    // declare your own store states
    interface State {
        count: number;
        compounds: Array<Compound>;
        reactions: Array<Reaction>;
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>;
    }
}
