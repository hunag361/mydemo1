<template>
	<h2>自定义hook函数操作</h2>
	<h2>x:{{ x }},y:{{ y }}</h2>
	<button @click="update">更新数据</button>
	<h3 v-if="loading">正在加载中</h3>
	<h3 v-else-if="errorMsg">错误信息:{{ errorMsg }}</h3>
	<ul v-else>
		<li>{{ data.id }}</li>
		<li>{{ data.name }}</li>
		<li>{{ data.distance }}</li>
	</ul>
	<hr />
	<ul v-for="item in data" :key="item.id">
		<li>id:{{ item.id }}</li>
		<li>name:{{ item.name }}</li>
		<li>price:{{ item.distance }}</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import useMouse from '../hooks/useMouse'
import { request } from '../hooks/userRequest'

// 定义接口约束对象类型
interface Ia {
	id: number;
	name: string;
	distance: number
}

export default defineComponent({
	name: 'hookName',
	setup() {
		// const x = ref(-1)
		// const y = ref(-1)
		// function update(event){
		//     console.log(event.pageX,event.pageY);
		//     x.value = event.pageX
		//     y.value = event.pageY
		// }
		// onMounted(() => {
		//     update
		// })
		const { x, y, update } = useMouse()
		const { loading, data, errorMsg } = request<Ia[]>('data/address.json') //获取对象数据
		// const  {loading,data,errorMsg} = request<Ia>('地址2') //获取对象数据
		watch(data, () => {
			if (data.value) {
				console.log(data.value.length)
			}
		})
		return {
			x,
			y,
			update,
			loading,
			data,
			errorMsg,
		}
	},
})
</script>

<style></style>
