import {useLayoutEffect, useState} from 'react'

export default function useWindowPosition(id) {
    const [animation, setAnimation] = useState(false)

    // Vai pegar o id da altura da página
    // Se altura da pagina foi maior que o selecionado, vai ativar a animação
    // para ativar a animação, vai ser por meio do scroll que vai atualizr a posição
    useLayoutEffect(() => {
        function updatePosition() {
            const offetSetHeight = window.document.getElementById(id).offsetHeight;
            if(window.pageYOffset > offetSetHeight * 0.7) {
                setAnimation(true)
            }
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return() => window.removeEventListener('scroll', updatePosition)
    },[id]);
    return animation;
}