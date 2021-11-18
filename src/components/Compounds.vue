<template>
    <div class="compound-list">
    <h1> Compounds that can react! </h1>
    <label for="new-compound">Compound name: </label>
    <input type="text" id="new-compound-name" name="new-compound-name">
    <input type="button" name="submit-compound" value="Submit!">
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Compound } from "../compound";

export default class CompoundPage extends Vue {
    compounds: Compound[] = [];
}

</script>