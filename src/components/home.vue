<template>
  <body >
    <div class="home" >
      <div class="row content">
        <div> 
          <h1>{{title}}</h1>
          <hr>
          <h3>{{intro}}</h3>
          <p>{{msg}}</p>
          <img class="pic" src="../pictures/Guzman1.jpg" alt="Habitat for Humanity logo" />
        </div>
      </div>
    </div>
  </body>
</template>
<script>
export default{
  name : 'home',
  data (){
    return{
      title: 'Hello',
      intro: "I'm Almario Guzman III",
      msg: "I am currently studying for a bachelor's degree in Information Technology from Holy Angel University. Striving to become a great web developer someday."
    }
  }
}
</script>

<style scoped>
  .home{
    text-align: center;
    width: 1000px;
    height: auto;
    padding: 20px;

    margin-left: 500px;
    font-family: monospace;
  }

</style>