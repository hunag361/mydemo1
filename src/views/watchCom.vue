<template>
  <h2>计算属性和监视</h2>
  <fieldset>
      <legend>姓氏和名字</legend>
      姓氏:<input type="text" placeholder="请输入姓氏" v-model="user.firstName"/>
      名字:<input type="text" placeholder="请输入名字" v-model="user.lastName"/>
  </fieldset>
  <fieldset>
      <legend>显示姓氏和名字</legend>
      姓名:<input type="text" placeholder="显示姓名" v-model="fullName1"/>
      姓氏:<input type="text" placeholder="显示姓氏" v-model="fullName2"/>
      名字:<input type="text" placeholder="显示名字" v-model="fullName3"/>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent ,reactive,computed,watch,ref,watchEffect} from 'vue'

export default defineComponent({
    setup() {
        const user = reactive({
            // 姓氏
            firstName:"东方",
            // 名字
            lastName:"不败"
        })
        // 计算属性的函数中如果只传入一个回调函数,表示的是get
        const fullName1 = computed(()=>{
            return user.firstName + user.lastName
        }) 
        const fullName2 = computed({
            get(){
                return user.firstName + user.lastName
            },
            set(val:string){
                console.log(val);   
                const names = val.split('_')
                user.firstName = names[0]
                user.lastName = names[1]
            }
        })
        const fullName3 = ref('')
        watch(user,({firstName,lastName})=>{
           fullName3.value = firstName+"_"+lastName
        },{immediate:true,deep:true})

        watchEffect(()=>{
          fullName3.value = user.firstName+"_"+user.lastName
        })
        
        // 监视fullName3数据
        watchEffect(()=>{
            const names = fullName3.value.split("_")
            user.firstName = names[0]
            user.lastName = names[1]
        })

        watch([()=>user.firstName,()=>user.lastName,fullName3],()=>{
            //  user.firstName,user.lastName 不是响应式数据 fullName3是响应式数据
            console.log('xxx');
        })

        return{
           user,
           fullName1,
           fullName2,
           fullName3
        }
    },
})
</script>


<style>

</style>