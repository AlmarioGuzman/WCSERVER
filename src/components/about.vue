<template>
  <div class="about" >
    <div class="title">
      <h1>{{title}}</h1>
    </div>
    <hr style="border: 1px dashed black;" />
    <div class="Education">
      <h3>{{education}}</h3>
      <p>{{pEducation}}</p>
    </div>
    <hr style="border: 1px dashed black;width:75%" />
    <div class="Education">
      <h3>{{education2}}</h3>
      <p>{{jhsEducation}}</p>
    </div>
    <hr style="border: 1px dashed black;width:75%" />
    <div class="Education">
      <h3>{{education3}}</h3>
      <p>{{shsEducation}}</p>
    </div>
    <hr style="border: 1px dashed black;width:75%" />
    <div class="Education">
      <h3>{{education4}}</h3>
      <p>{{terEducation}}</p>
      <p>{{course}}</p>
    </div>
    <hr style="border: 1px dashed black;width:75%" />
    <div class="Education">
      <h3>{{about}}</h3>
      <p>{{aboutMe}}</p>
    </div>
  </div>
</template>
<script>
export default{
  name : 'about',
  data (){
    return{
      title: 'Educational Background',
      education: 'Primary Education',
      pEducation: 'Camuning Elementary School',
      education2: 'Junior High School (Grade 7 - 10)',
      jhsEducation: 'Pampanga High School',
      education3: 'Senior High School (Grade 11 - 12)',
      shsEducation: 'Colegio de Sebastian',
      education4: 'Tertiary Eduation (College)',
      terEducation: 'Holy Angel University',
      course: 'BS Information Technology',
      about: 'About Me',
      aboutMe: "I am currently studying for a bachelor's degree in Information Technology from Holy Angel University. Striving to become a great web developer someday."
    }
  }
}
</script>

<style scoped>
  * {
    margin: auto;
    box-sizing: border-box;
    background-color:#ADD8E6;
    
  }
  .about{
    text-align-last: center;
    width: 800px;
    height: auto;
    padding: 20px;
    margin-top: 40px;
  }
  .title{
    padding: 20px;
    padding-bottom: 40px;
    font-family: monospace;
  }
  .Education{
    padding: 20px;
    padding-bottom: 40px;
    font-family: monospace;
  }
</style>