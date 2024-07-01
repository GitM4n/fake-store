import {computed} from 'vue'


export const gradients = {
    decent: "linear-gradient(to right, #4ca1af, #5ae6ff)", 
    sylvia: "linear-gradient(to right, #ff3e0e, #ff9068)",
    deepSea: "linear-gradient(to right, #2c3e50, #4ca1af)",
    flush: "linear-gradient(to right, #56ab2f, #a8e063)",
    scarlet: "linear-gradient(to right, #ef233c, #ff6d6d)",
    sun: "linear-gradient(to right, #ffd900, #ff8800)",
      
}


export const useGradientColor = () => {
    const gradientColor = computed(()=>{
        const key =Object.keys(gradients)[Math.floor(Math.random() * Object.keys(gradients).length)]
    
       return gradients[key as keyof typeof gradients]
    })


    return{ 
        gradientColor
    }
}