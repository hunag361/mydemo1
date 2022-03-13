<template>
	<h2>app{{msg}}</h2>
</template>

<script lang="ts">
import { defineComponent ,ref} from 'vue'

export default defineComponent({
    name:"homepageName",
	setup() {
        const msg = ref('what')
		return {
            msg
        }
	},
})
</script>

<style></style>
