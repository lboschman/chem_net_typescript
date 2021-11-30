<template>
  <div id="reactions"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../store";
import { Compound } from "../chemical-engine/compound";
import { Reaction } from "../chemical-engine/reaction";

export default defineComponent({
  name: "ReactionPage",

  setup() {
    const store = useStore();
    {
      store.state.reactions, store.state.compounds;
    }
  },

  data() {
    return {
      compounds: this.$store.state.compounds as Array<Compound>,
      reactions: this.$store.state.reactions as Array<Reaction>,
    };
  },
});
</script>

<style></style>
