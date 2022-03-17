// 发送请求
import {ref} from 'vue'
import axios from 'axios' 
export function request<T>(url:string){
    const loading = ref(true)
    const data = ref<T | null>(null)
    const errorMsg = ref('')
    axios.get(url).then(response =>{
        loading.value = false
        data.value = response.data
    }).catch(error =>{
        loading.value = false
        errorMsg.value = error.message || '未知错误'
    })
    return{
        loading,
        data,
        errorMsg
    }
}

export default{
    request
}