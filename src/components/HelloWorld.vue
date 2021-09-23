<template>
  <div class="hello">
    <h1 style='color: #000;'>{{ msg }}</h1>
    {{count}}
    <button @click="countInstance">点击新增</button>
    <a style='color: red'href="www.babble.com"></a>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    created() {
      console.log(123);
    },
    computed: {
      count() {
        return this.$store.state.count;
      }
    },
    methods: {
      countInstance() {
        this.$store.commit('countIncase', 200);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #1029c9;

  }
</style>