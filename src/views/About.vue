<template>
  <div class="about">
    <counter></counter>
    <person></person>
  </div>
</template>
<script>
import Counter from "../components/counter";
import person from "../components/person";
export default {
  name: 'about',
  components: {Counter,person},
  data() {
    return {}
  },

  created() {
  }
}
</script>
