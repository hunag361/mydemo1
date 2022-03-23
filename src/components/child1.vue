<template>
  <h2>child子级组件</h2>
  <h3>age:{{age}}</h3>
  <h3>length:{{length}}</h3>
</template>

<script lang="ts">
import { defineComponent ,computed ,toRef,Ref} from 'vue'
function useGetLength(age:Ref) {
    return computed(()=>{
        return age.value.toString().length
    })
}
export default defineComponent({
    name:"childHeelo",
    props:{
        age:{
            type:Number,
            required:true
        }
    },
    setup(props) {
        // props.age是一个number，转换为ref数据
        const length = useGetLength(toRef(props,'age'))
        return{
         length
        }
    },
})
</script>


<style>

</style>