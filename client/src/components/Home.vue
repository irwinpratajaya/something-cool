<template lang="html">
  <div class="">
    <judul></judul>
    <banner></banner>
    <konten v-bind:portfolio="portfolio" v-on:loaded="getData"></konten>
    <foot></foot>

  </div>
</template>

<script>
import axios from 'axios'
import Judul from './Judul';
import Banner from './Banner';
import konten from './konten';
import Foot from './Foot';


export default {
  name: 'Home',
  data() {
    return {
      title: 'ONLINE PORTFOLIO',
      portfolio: ''
    }
  },
  components: {
    Judul,
    Banner,
    konten,
    Foot
  },
  methods: {
    getData() {
      var self = this;
      axios.get('http://localhost:3000/')
        .then(function (response) {
          console.log(response.data);
          self.portfolio = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
/*h1, h2 {
  font-weight: normal;
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
  color: #42b983;
}*/
</style>
