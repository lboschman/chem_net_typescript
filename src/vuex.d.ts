import { Store } from "vuex";
import { Compound } from "./chemical-engine/compound";

declare module "@vue/runtime-core" {
    // declare your own store states
    interface State {
        count: number;
        compounds: Array<Compound>;
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>;
    }
}
