const sprite = document.querySelector('.sprite');
const block = document.querySelector('.block');
// Seleciona os elementos 'sprite'/personagem e 'block'/obstáculo e os define como as constantes cujo código utiliza e opera com

const jump = () => {
    sprite.classList.add('jump');

    setTimeout(() => {
        sprite.classList.remove('jump');
    }, 500);
    // Recebe uma função e um tempo - nesse caso 500ms
}
/* Acima, estamos definindo que por o programa deve iniciar a função que solta a animação de pulo, após o evento jump, e depois removê-la */

const loop = setInterval(() => {
    const blockPosition = block.offsetLeft;
    const spritePosition = +window.getComputedStyle(sprite).bottom.replace('px', '');
    // Desse modo, coletamos a posição da sprite na tela e, com o simbolo "+", convertemos o bottom do console para números - habilitando calculá-los

    if(blockPosition <= 80 && blockPosition > 0 && spritePosition < 40) {

        block.style.animation = 'none';
        block.style.left = `${blockPosition}px`;
        // Serve para definir o momento em que o bloco - sapinho - encosta no sprite - personagens

        sprite.style.animation = 'none';
        sprite.style.bottom = `${spritePosition}px`;

        sprite.src = './Imagens/Dead.png';
        sprite.style.width = '120px';
        sprite.style.marginLeft = '10px';

        clearInterval(loop);
        // Com isso, ao perdermos o jogo, o loop para de ser rodado

    }
}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);
// Comandos para movimentação do personagem - as setas do teclado também funcionam para tal