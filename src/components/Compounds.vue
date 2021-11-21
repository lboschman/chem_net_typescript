<template>
    <div class="compound-list">
    <h1> Compounds that can react! </h1>
    <label for="new-compound">Compound name: </label>
    <div v-html="render_names()"/>
    <!-- </div> -->
    <!-- <div v-for="comp in compound_list">
        <h3>{{comp.text}}</h3>
    </div> -->

    <!-- <input type="text" id="new-compound-name" name="new-compound-name" v-model="compound_name"> -->
    <input type="text" id="new-compound-name" name="new-compound-name">
    <input type="button" name="submit-compound" value="Submit!" v-on:click="add_compound('new-compound-name')"> -->

    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Compound } from "../compound";



export default class CompoundPage extends Vue {
    compounds: Compound[] = [];

    names: string[] = ["Alice", "Bob", "Caroline", "Dick"]

    add_compound (compound_name: string) {
        const compound = new Compound(compound_name);
        this.compounds.push(compound);

    }

    add_name (name: string) {
        this.names.push(name);
    }

    get_compound_names(): string[] {
        let names: string[] = [];
        this.compounds.forEach(compound => {
            names.push(compound.name)
        });
        return names;
    }

    data() {
        return {'compound_list': [
            {"id": 0, "text": "Enzyme"},
            {"id": 1, "text": "Substrate"},
            {"id": 2, "text": "ES-complex"},
            {"id": 3, "text": "Product"}
        ]}
    }

    rendered_table() {
        return "<p>Help!!!</p>";
    }

    render_names() {
        let sentences: string[] = [];
        this.names.forEach((value) => {
            const sentence: string = "Hi, im am ".concat(value);
            sentences.push(sentence);
        })

        let major_string: string = sentences.join("</li><li>");
        major_string = "<ul><li>".concat(major_string, "</li></ul>")

        return major_string;
    }
}

</script>