<template>
  <h3>readonly与shallowReadonly</h3>
  <h3>state:{{state}}</h3>
  <hr>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">

import { defineComponent ,reactive ,readonly,shallowReadonly} from 'vue'

export default defineComponent({
    setup() {
        const state = reactive({
            name:"佐助",
            age:20,
            car:{
                name:"奔驰",
                color:"yellow"
            }
        })
        // readonly 只读
        // shallowReadonly 浅只读的
        let content2 = readonly(state)
        let content3 = shallowReadonly(state)
        function update() {
             // content2.car.name += '==='
            content3.car.name += '===='
        }
        return{
            state,
            update,
            content2,
            content3
        }
    }
})
</script>


<style lang="scss" scoped>

</style>