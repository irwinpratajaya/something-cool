<template lang="html">
  <div class="">
    <p>{{ title }}</p>
    <header></header>
    <banner></banner>
    <content></content>
    <footer></footer>

    <!-- <h2>ONLINE PORTFOLIO</h2>
    <question-post></question-post>
    <table class="table" id="stackoverflow">
      <thead>
        <tr>
          <th>Title</th>
          <th>Votes</th>
        </tr>
      </thead>
      <question-list v-bind:questions="questions" v-on:loaded="getData"></question-list>
    </table> -->
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header';
import Banner from './Banner';
import Content from './Content';
import Footer from './Footer';


export default {
  name: 'Home',
  data() {
    return {
      title: 'ONLINE PORTFOLIO',
      content: ''
    }
  },
  components: {
    Header,
    Banner,
    Content,
    Footer
  },
  methods: {
    getData() {
      var self = this;
      axios.get('http://localhost:3000/')
        .then(function (response) {
          // console.log(response.data);
          self.content = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
  // mounted() {
  //   this.getData()
  // }
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
