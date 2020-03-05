<template>
  <div>
    <Header/>
    <div class="content">

    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";

  export default {
    name: "Store",
    components: {Footer, Header}
  }
</script>

<style scoped>
  .content {
    min-height: 70vh;
  }
</style>
