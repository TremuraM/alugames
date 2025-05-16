function alterarStatus(id) {
    const gameItem = document.getElementById(`game-${id}`);
    const imageContainer = gameItem.querySelector('.dashboard__item__img');
    const button = gameItem.querySelector('.dashboard__item__button');

    // Verifica se o jogo está alugado
    const alugado = imageContainer.classList.contains('dashboard__item__img--rented');

    if (alugado) {
        // Jogo será devolvido
        imageContainer.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.textContent = 'Alugar';
    } else {
        // Jogo será alugado
        imageContainer.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
    }
}
