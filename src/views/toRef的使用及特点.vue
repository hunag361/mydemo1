<template>
  <h3>state:{{state}}</h3>
  <h3>age:{{age}}</h3>
  <h3>money:{{money}}</h3>
  <hr>
  <button @click="update">更新数据</button>
  <!-- 传递的是普通数据，而不是ref对象 -->
  <Child :age="age" /> 
</template>

<script lang="ts">
import { defineComponent ,reactive ,toRef,ref} from 'vue'
import Child  from '../components/child1.vue'
export default defineComponent({
    components:{Child},
    setup() {
        const state = reactive({
            age:5,
            money:100
        })
        // 把响应式数据state对象的某个属性age变味了ref对象
        const age = toRef(state,'age')
        const money = ref(state.money)
        const update = ()=>{
            console.log('测试');
            state.age += 2
            age.value += 3
            money.value += 10
        } 
        return{
           state,
           age,
           money,
           update
        }
    },
})
</script>

<style>

</style>