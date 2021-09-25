(async () => {
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const $ = (tag) => document.querySelector(tag);
    const title = $('.header-sleng');
    const message = ['FIND BEST EVENTS', 'AROUND THE WORLD'];
    title.innerHTML = '';
    for(let text of message) {
        for(let letter of text) {
            const newLetter = document.createElement('span');
            newLetter.innerText = letter;
            title.appendChild(newLetter);
            await sleep(250);
            newLetter.classList.remove('title-letter');
            newLetter.classList.add('letter-animation');
        }
        const br = document.createElement('br');
        title.appendChild(br);
    }
})();
