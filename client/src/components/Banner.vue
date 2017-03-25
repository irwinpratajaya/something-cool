<template lang="html">
  <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
        <h1 class="header center teal-text text-lighten-2">Online portfolio</h1>
        <div class="row center">
          <h5 class="header col s12 light">as you wish</h5>
        </div>
        <form class="">
          <div class="form-group">
            <label for="title">Title</label>
            <input v-model="title" name="title" type="text" class="form-control" placeholder="title" id="title">
          </div>

          <div class="form-group">
            <label for="title">Description</label>
            <textarea v-model="description" name="description" class="form-control" placeholder="your description" id="description"></textarea>
          </div>

          <div class="form-group">
            <label for="image">Image Link</label>
            <textarea v-model="image" name="image" class="form-control" placeholder="image link" id="image"></textarea>
          </div>

          <button v-on:click="postPortfolio" class="btn-large waves-effect waves-light teal lighten-1">tambah portfolio</button>
        </form>

      </div>
    </div>
    <!-- <div class="parallax"><img src="" alt="Unsplashed background img 1"></div> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: '',
      description: '',
      creator: '',
      image: ''
    }
  },
  methods: {
    postPortfolio() {
      var self = this;
      axios.post('http://localhost:3000/', {
        title: this.title,
        description: this.description,
        creator: this.creator,
        image: this.image
      })
        .then(function (response) {
          console.log('--------------test--------------');
          console.log(response.data);
          self.title = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="css">
</style>
