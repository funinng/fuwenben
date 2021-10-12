<template>
  <div class="about">
    <counter></counter>
    <person></person>
    <SingNature :travel-place="travelPlace"></SingNature>
  </div>
</template>
<script>
import Counter from "../components/counter";
import person from "../components/person";
import SingNature from '../components/signature'
export default {
  name: 'about',
  components: {Counter,person, SingNature},
  data() {
    return {
      travelPlace:[]
    }
  },

  created() {
  }
}
</script>
