import {ref} from 'vue'


const isDrag = ref<boolean>(false)

export const useTouchEvents = () => {
    const startX = ref<number>(0)
    const startY = ref<number>(0)
  
  
    const targetEl = ref<HTMLElement | null>(null)


    const onTouchStart = (e: TouchEvent) => {
        startX.value = e.touches[0].clientX
        startY.value = e.touches[0].clientY
        isDrag.value = false
    }    
    const onTouchMove = (e: TouchEvent) => {
      
        targetEl.value = (e.target as HTMLElement).closest('.product-card') as HTMLElement
     
        if(targetEl.value) {
            isDrag.value = true
           
            targetEl.value.style.zIndex = '890'
            targetEl.value.style.left = e.changedTouches[0].clientX - targetEl.value.clientWidth / 2 + 'px'
            targetEl.value.style.top = e.changedTouches[0].clientY - targetEl.value.clientHeight / 2 + 'px'
            targetEl.value.style.position = 'fixed'
        }


    }
    const onTouchEnd = (event: TouchEvent) => {
        isDrag.value = false
       
        if(targetEl.value) {
            targetEl.value.style.position = 'relative'
            targetEl.value.style.zIndex = '0'
            targetEl.value.style.left = ''
            targetEl.value.style.top = ''
            targetEl.value = null
        }

       const targets = document.elementsFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);

       if(targets.length > 0) {

        const target = targets.filter((target) => target.classList.contains('drop-zone'))[0]
        if(target){
            console.log(target)
        }else{
            console.log('no target')
        }
        
       }

    }

    return {onTouchStart, onTouchMove, onTouchEnd, isDrag}






}