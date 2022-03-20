<template>
  <h2>toRefs的使用</h2>
  <!-- <h2>name:{{state.name}}</h2>
  <h2>age:{{state.age}}</h2> -->
  <!-- <h3>name:{{name}}</h3>
  <h3>age:{{age}}</h3> -->
  <h3>name1:{{name1}}</h3>
  <h3 ref="age">age1:{{age1}}</h3>
</template>

<script lang="ts">
import { defineComponent ,reactive,toRefs ,ref ,onMounted} from 'vue'
function useFeatureX() {
    const state =  reactive({
            name1:"自来也",
            age1:47
        })
    return {
        ...toRefs(state)
    }
}
export default defineComponent({
    name:"toRefs",
    setup() {
        // const state =  reactive({
        //     name:"自来也",
        //     age:47
        // })
        // const state2 = toRefs(state)
        // const {name,age} = toRefs(state)
        const {name1,age1} = useFeatureX()
        const age = ref<HTMLElement | null>(null)
        console.log(age);
        onMounted(() => {
            console.log(age.value);
        }),
        setInterval(()=>{
            // state.age++
            // state2.age.value++
            // age.value++
            age1.value++
            // console.log('===');
        },2000)
        return{
        //   ...state //不是响应式，解构为{ name:"自来也",age:47}
        //   ...state2
            // name,
            // age,
            name1,
            age1,
            age
        }
    },
})
</script>


<style>

</style>