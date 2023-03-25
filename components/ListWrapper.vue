<template>
  <div class="h-full p-20">
     <p>{{headerTitle}} - {{id}}</p>
     <button @click="changeTitle('Todo App')"> Change Name</button>
  </div>
</template>

<script lang="ts">
import { namespace } from "vuex-class";

export default {
  data() {
    return {
        headerTitle: 'Todo App',
        id: 1 as number | string
    }
  },
  beforeMount(){

  },
  methods : {
    changeTitle (title: string) {
        this.headerTitle = title
    }
  }
}
</script>

<style>

</style>