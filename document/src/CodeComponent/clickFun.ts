import { copyText } from '@siroi/fe-utils';


const copyEvent = () => {
    const buttons = document.querySelectorAll(".copy-button");

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const codeContent = btn?.closest('.code-block')?.querySelector('code')?.textContent;
            console.log(codeContent);
            copyText(codeContent!)
        })
    })
}

const showCode = () => {
    const showCodeBtns = document.querySelectorAll('.show-code');
    showCodeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const codeBlock = btn.closest('.card')?.querySelector('.code-block');
            if (codeBlock) {
                codeBlock.classList.toggle('show');
            }
        })
    })
}

function init() {
    copyEvent();
    showCode();
}

export default init;