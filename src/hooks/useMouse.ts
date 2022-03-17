import { ref,onMounted} from 'vue'
export default function(){
    const x = ref(-1)
        const y = ref(-1)
        function update(event:MouseEvent){
            console.log(event.pageX,event.pageY);
            x.value = event.pageX
            y.value = event.pageY
        }
        onMounted(() => {
            update
        })

        return{
            x,
            y,
            update
        }
}