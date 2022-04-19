<template>
  <div class="contact">
    <div class="title">
      <h1>{{title}}</h1>
    </div>
    <hr style="border: 1px dashed black;" />
    <div class="Education">
      <h3>{{email}}</h3>
      <p>{{myEmail}}</p>
    </div>
    <hr style="border: 1px dashed black;width:75%" />
    <div class="Education">
      <h3>{{phone}}</h3>
      <p>{{myPhone}}</p>
    </div>
    <hr style="border: 1px dashed black;width:75%" />
    <div class="Education">
      <h3>{{facebook}}</h3>
      <p>{{myFacebook}}</p>
    </div>
    <hr style="border: 1px dashed black;width:75%" />
    <div class="Education">
      <h3>{{address}}</h3>
      <p>{{myAddress}}</p>
      <p>{{course}}</p>
    </div>

  </div>
  
</template>
<script>
export default{
  name : 'contact',
  data (){
    return{
      title: 'Contact Information',
      email: 'Email',
      myEmail: 'amguzmaniii@student.hau.edu.ph',

      phone: 'Phone Number',
      myPhone: '+63 976-017-9186',

      facebook: 'Facebook',
      myFacebook: 'Almario Guzman',
      
      address: 'Address',
      myAddress: "#004 Sitio Dalisdis, Camuning Mexico 2021 Pampanga",

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
  .contact{
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