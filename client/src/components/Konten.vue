<template lang="html">
  <div class="container" id="portfolio">
    <div class="section">

      <!--   Icon Section   -->
      <div class="row" >
        <div class="col s12 m4" v-for="portfolio in portfolio">
          <div class="icon-block">
            <h2 class="center brown-text"></h2>
            <img v-bind:src="portfolio.image" alt="">
            <h5 class="center">{{ portfolio.title }}</h5>

            <p class="light">{{ portfolio.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Konten',
  data() {
    return {
      portfolio: ''
    }
  },
  methods: {
    getData() {
      var self = this;
      axios.get('http://localhost:3000/')
        .then(function (response) {
          // console.log(response.data);
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

<style lang="css">
</style>
