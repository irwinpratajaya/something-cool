<template lang="html">
  <nav class="white" role="navigation">
    <div class="nav-wrapper container">
      <img src="http://aarzoointeriors.com/images/portfolio-text.png" alt="" id="logo-container" href="#" class="brand-logo">
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Navbar Link</a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
        <li><a href="#">Navbar Link</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'

export default {
}
</script>

<style lang="css">
img{
  width: 50%;
  text-align: center;
}
</style>
