<template>
	<div>
		<nav>
			{{number}}
		</nav>
		<router-view />
	</div>
</template>

<script lang="ts">
// defineComponent 函数,目的是定义一个组件,内部可以传入一个配置对象
import { defineComponent } from 'vue'

export default defineComponent({
	setup(){
        const number = 10
        return{
            number
        }
    }
})
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
