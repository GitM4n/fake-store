import {reactive, computed} from 'vue'
import {v4} from 'uuid'


const loaderSet = reactive(new Set<string>())
const loader = computed(() => loaderSet.size > 0)


export const useLoader = () =>{
    const _uuid:string = v4()

    const startLoader = () => {
        loaderSet.add(_uuid)
    }

    const stopLoader = () => {
        loaderSet.delete(_uuid)
    }

    return{
        startLoader,
        stopLoader,
        loader
    }
}