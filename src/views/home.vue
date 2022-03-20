<template>
	<h2>app{{msg}}</h2>
    <h2>{{showMessage}}</h2>
    <HelloWorld :message="msg" @xxx="xxx"/>
</template>

<script lang="ts">
import { defineComponent ,ref,reactive} from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
    name:"homepageName",
    components:{HelloWorld},
	setup() {
        const msg = ref('what')
        const showMessage = ref('setup中的showMessage')
        const m3 = {
         name:"小工"
        }
        const obj = reactive(m3)
        function xxx(text:string){
            msg.value += text
        }
		return {
            msg,
            showMessage,
            xxx,
            obj
        }
	},
})
</script>

<style></style>
