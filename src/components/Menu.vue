<template>
    <div class="navbar">
        <ul class="menu">
            <li><a href="#home">Home</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Navbar extends Vue {};
</script>


<style scoped>
ul.menu {
  list-style-type: none;  
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;;
}

li {
  float: left;
}

ul.menu > li a{
  display: block;
  color: #ffffff;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

ul.menu > li:hover {
  background-color: #111111;
}

.active {
  background-color: #0000ff;
}

</style>