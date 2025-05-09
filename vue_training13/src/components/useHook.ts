import { type Ref } from "vue"

export function useClip(){
    function copyText(text:Ref<string>,copiedText:Ref<string>): void {
        navigator.clipboard
          .writeText(text.value)
          .then(() => {
            copiedText.value = text.value
            alert('コピーしました。')
          })
          .catch(() => {
            alert('コピーできませんでした。')
          })
      }

    return{
        copyText,
    }
}