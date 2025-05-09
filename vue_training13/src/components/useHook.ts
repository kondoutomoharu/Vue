export function useClip(){
    function copyText(text: string,copiedText:string): void {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            copiedText = text
            alert('コピーしました。')
          })
          .catch(() => {
            alert('コピーできませんでした。')
          })
      }

    return{
        copyText
    }
}