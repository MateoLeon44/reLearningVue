<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{texto}}</h2>
    <newComponent></newComponent>
  </div>
</template>

<script>
import newComponent from './newComponent.vue'

export default {
  name: 'HelloWorld',
  components:{
    newComponent
  },
  props: {
    msg: String
  },
  data()
  {
    return{
      texto: "New var"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
}
</style>
