<template>
<div class="person">
  <input type="text" v-model="name">
  <button @click="add">添加人员</button>
<ul>
  <li v-for="p in person" :key="p.id">{{p.name}}</li>
</ul>
</div>
</template>

<script>

import {nanoid} from "nanoid";

export default {
  name: "person",
  data(){
    return{
      name:''
    }
  },
  computed:{
    person(){
      return this.$store.state.person
    }
  },
  created() {
    let x=nanoid()
    let n=nanoid()
    console.log(x,n)
  },
  methods:{
    add(){
     const personObj={id:nanoid(),name:this.name}
this.$store.commit('PERSONADD',personObj)
      console.log(personObj)
      this.name=''
    }
  }
}
</script>

<style scoped>

</style>
