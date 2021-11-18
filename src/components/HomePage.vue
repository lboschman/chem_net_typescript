<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
    props: {
        message: String
    },
})

export default class HomePage extends Vue {
    message!: string;
};
</script>

<style scoped>

</style>