<template>
    <h1>HelloWorld{{ message }}</h1>
    <button @click="emitxxx">分发事件</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props:['message'],
  setup(props,content) {
      console.log(props);
      console.log(content);
      function emitxxx(){
          content.emit('xxx','hh')
      }
      return{
          emitxxx
      }
  }
  
});
</script>

<style scoped lang="scss">

</style>
