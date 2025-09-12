import { ref } from "vue"

export function useDisclousure(){
    const isOpen = ref<boolean>(false)

    const onOpen = ()=>{
        isOpen.value = true
    }

    const onClose = ()=>{
        isOpen.value = false
    }

    return{
        isOpen,
        onOpen,
        onClose
    }
}