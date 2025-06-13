document.addEventListener('DOMContentLoaded', () => {
    const detailButtons = document.querySelectorAll('.produto-item button');

    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Você clicou em "Ver Detalhes"! Em uma loja real, isso o levaria para a página do produto.');
            // Aqui você poderia redirecionar para uma página de detalhes do produto
            // Ex: window.location.href = 'detalhes-produto.html?id=123';
        });
    });
});