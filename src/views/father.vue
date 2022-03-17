<template>
  <h2>父级组件</h2>
  <button @click="isShow = !isShow">切换显示</button>
  <Child v-if="isShow"/>
</template>

<script lang="ts">
import Child from '../components/child.vue'
import { defineComponent ,ref} from 'vue'

export default defineComponent({
    components:{Child},
    name:"fatherZu",
    setup() {
        const isShow = ref(true)
        return{
           isShow
        }
    },
})
</script>


<style>

</style>