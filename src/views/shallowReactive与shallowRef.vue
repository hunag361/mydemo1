<template>
  <h2>shallowReactive与shallowRef</h2>
  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <h3>m4:{{ m4 }}</h3>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent ,reactive,shallowReactive, ref,shallowRef} from 'vue'

export default defineComponent({
    setup() {
        const m1 = reactive({
          name:"ming",
          car:{
              color:'red'
          }
        })
        const m2 = shallowReactive({
          name:"ming",
          car:{
              color:'red'
          }
        })
        const m3 = ref({
          name:"ming",
          car:{
              color:'red'
          }
        })
        const m4 = shallowRef({
          name:"ming",
          car:{
              color:'red'
          }
        })
        function update(){
            // m1.car.color += '====' //都发生变化
            // m1.name += '==='
            // m2.car.color += '===='    //都发生变化
            // m2.name += '==='
            // m3.value.car.color += '===='  //都发生变化
            // m3.value.name += '==='
            // m4.value.car.color += '====' //外层没有变化
            // m4.value.name += '==='
        }
        return{
            m1,
            m2,
            m3,
            m4,
            update
        }
    },
})
</script>


<style>

</style>