<template>
  <h2>子级组件</h2>
  <h4>{{msg}}</h4>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent ,ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'

export default defineComponent({
    name:"childZu",
    beforeCreate(){
        console.log('2.x中的beforeCreate');
    },
    created() {
        console.log('2.x中的created')
    },
    beforeMount(){
        console.log('2.x中的beforeMount')
    },
    mounted() {
        console.log('2.x中的mounted')
    },
    beforeUpdate(){
        console.log('2.x中的beforeUpdate')
    },
    updated(){
        console.log('2.x中的updated')
    },
    // vue2中的beforeDestory
    beforeUnmount() {
         console.log('2.x中的beforeUnmount')
    },
    // vue2中的destoryed
    unmounted(){
        console.log('2.x中的unmounted')
    },
    setup() {
        console.log('3.0中的setup');
        
        const msg = ref('abc')
        // 按钮点击事件回调
        const update = () =>{
            msg.value += '==='
        }
        onBeforeMount(()=>{
            console.log('3.0中的onBeforeMount');
        })
        onMounted(()=>{
            console.log('3.0中的onMounted');
        })
        onBeforeUpdate(()=>{
            console.log('3.0中的onBeforeUpdate');
        })
        onUpdated(()=>{
             console.log('3.0中的onUpdated');
        })
        onBeforeUnmount(()=>{
             console.log('3.0中的onBeforeUnmount');
        })
        onUnmounted(()=>{
              console.log('3.0中的onUnmounted');
        })
        return{
            msg,
            update
        }
    }
})
</script>


<style>

</style>