<template>
	<div class="home">
		<h2>{{ count }}</h2>
		<button @click="updateCount">更新数据</button>
		{{ user.name }}
		{{ user.wife.name }}
		{{ user.wife.age }}
		{{ user.wife.car }}
		<button @click="update">更新数据</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
	name: 'HomeView',
	components: {},
	setup() {
		// let count = 5 //此时数据并不是响应式数据(响应式数据:数据变化,页面也跟着渲染变化),使用ref
		let count = ref(5) //ref是一个函数,定义一个响应式的数据,返回一个ref对象,对象中有value属性,对此属性进行操作,html
		function updateCount() {
			count.value++
		}
		const obj: any = {
			//为了在使用 user.gender = '男'不出现错误的提示信息
			name: '小明',
			wife: {
				name: '晓晓',
				age: 18,
				car: ['奔驰', '宝马'],
			},
		}
		// user是代理对象,obj 是目标对象
		const user = reactive<any>(obj)
		const update = () => {
			// 直接使用目标对象的属性值来更新目标对象成员的值是不允许的,只能使用代理对象的方式更新数据
			user.name = '小狗'
			user.wife.name = '小钩钩'
			user.wife.age = 23
			user.wife.car = ['大众']
			user.gender = '男'
            delete obj.name //界面没有更新 但是name属性被删除了
		}
		return {
			count,
			updateCount,
			user,
			update,
		}
	},
})
</script>
