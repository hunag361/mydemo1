<template>
  <h2>toRaw和markRaw</h2>
  <h3>toRaw和markRaw</h3>
  <h3>state:{{state}}</h3>
  <hr>
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>

<script lang="ts">
import { defineComponent ,reactive ,toRaw ,markRaw} from 'vue'
interface userinfo{
   name:string;
   age:number;
   likes?:string[]
}
export default defineComponent({
    setup() {
        const state = reactive<userinfo>({
          name:"小明",
          age:20
        })
        const testToRaw = ()=>{
          console.log('测试')
          // 代理对象变为普通对象,数据改变，但是界面不发生变化
          const user = toRaw(state)
          user.name += '==='
          console.log(state);
        }
        const testMarkRaw = ()=>{
          console.log('测试');
        //   state.likes = ['吃','喝']
        //   state.likes[0] += '==='
        //   console.log(state);
        const likes = ['吃','喝']
        // markRaw 标记的对象数据，从此以后不能被成为代理对象了
        state.likes = markRaw(likes)
        setInterval(()=>{
            (state as any).likes[0] +='==='
            console.log('定时器走起来');
        },1000)

        }
        return{
           state,
           testToRaw,
           testMarkRaw,
        }
    },
})
</script>

<style>

</style>