<template>
  <div id="compounds">
    <h1>Compounds</h1>

    <div id="new-compound">
      <form @submit="add_compound">
        <label>New Compound</label>
        <input
          v-model="new_compound"
          type="text"
          name="new_compound"
          autocomplete="off"
        />
        <button>Add Compound!</button>
      </form>
    </div>

    <div id="compound-list">
      <ul>
        <li v-for="compound in compounds" v-bind:key="compound.name">
          <span> {{ compound.name }}, [{{ compound.abundance }}] </span>
        </li>
      </ul>
      <h4 v-if="compounds.length === 0">No compounds yet</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Compound } from "../compound";

export default defineComponent({
  name: "CompoundPage",

  data() {
    return {
      names: ["Alice", "Bob", "Caroline", "Dick"],
      compounds: [] as Array<Compound>,
      new_compound: "",
    };
  },

  methods: {
    add_compound(e: Event) {
      e.preventDefault();
      const compound = new Compound(this.new_compound);
      this.compounds.push(compound);
    },
  },
});
</script>
