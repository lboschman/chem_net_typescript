import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { Compound } from './chemical-engine/compound'

// define your typings for the store state
export interface State {
  count: number,
  compounds: Array<Compound>  
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    compounds: []
  },

  mutations: {
    add_compound(state, new_compound_name: string) {
      const existing_names: string[] = state.compounds.map((c) => {
        return c.name;
      });
      if (
        !existing_names.includes(new_compound_name) &&
        !(new_compound_name === "")
      ) {
        const compound = new Compound(new_compound_name);
        state.compounds.push(compound);
        console.log("Added new compound with name ".concat(compound.name));
      }
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}