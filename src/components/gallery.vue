<template>
  <div class="gallery">
    <h1>{{title}}</h1>
    <!-- Gallery -->
  <div class="row">
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <img
        src="../pictures/pic2.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />
      <img
        src="../pictures/pic10.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Wintry Mountain Landscape"
      />
    </div>
    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
        src="../pictures/pic9.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in the Clouds"
      />
      <img
        src="../pictures/pic4.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />
    </div>
    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
        src="../pictures/pic6.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Waves at Sea"
      />
      <img
        src="../pictures/pic11.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Yosemite National Park"
      />
  </div>
</div>
<!-- Gallery -->
  </div>
</template>
<script>
export default{
  name : 'gallery',
  data (){
    return{
      title: 'Gallery'
    }
  }
}
</script>

<style scoped>
  .gallery{
    text-align: center;
    padding: 20px;
    font-family: monospace;
  }

</style>