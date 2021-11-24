<template>
  <div id="compounds">
    <h1>Compounds</h1>
    <!-- First make  form to create new compounds -->
    <div id="new-compound">
      <form @submit="add_compound">
        <label>New Compound </label>
        <input
          v-model="new_compound"
          type="text"
          name="new_compound"
          autocomplete="off"
        />
        <button>Add Compound!</button>
      </form>
    </div>

    <!-- List all the existing compounds -->
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
import { Compound } from "../chemical-engine/compound";

export default defineComponent({
  name: "CompoundPage",

  data() {
    return {
      compounds: [] as Array<Compound>,
      new_compound: "",
    };
  },

  methods: {
    add_compound(e: Event) {
      e.preventDefault();
      const existing_compounds: string[] = this.compounds.map((c) => {
        return c.name;
      });
      // Check if the compound already exists, and is not an empty string
      // If not, add the new compound
      if (
        !existing_compounds.includes(this.new_compound) &&
        !(this.new_compound === "")
      ) {
        const compound = new Compound(this.new_compound);
        this.compounds.push(compound);
      }
    },
  },
});
</script>

<style scoped>
#compounds {
  align-content: flex-start;
}

#compounds > h1 {
  color: rgb(236, 116, 17);

}
</style>
