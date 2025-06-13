document.addEventListener('DOMContentLoaded', () => {
    // Código para os botões "Ver Detalhes" (já existente)
    const detailButtons = document.querySelectorAll('.produto-item button');

    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Você clicou em "Ver Detalhes"! Em uma loja real, isso o levaria para a página do produto.');
        });
    });

    // Código para o formulário de contato
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            // Simulação de envio de dados
            console.log('Dados do formulário enviados:');
            console.log('Nome:', nome);
            console.log('E-mail:', email);
            console.log('Mensagem:', mensagem);

            formStatus.style.color = 'green';
            formStatus.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';

            // Limpa o formulário após 3 segundos
            setTimeout(() => {
                contactForm.reset();
                formStatus.textContent = '';
            }, 3000);

            // Em uma aplicação real, aqui você usaria fetch() ou XMLHttpRequest
            // para enviar os dados para um servidor. Exemplo:
            /*
            fetch('/api/send-email', { // Endereço de um endpoint no seu backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, email, mensagem })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formStatus.style.color = 'green';
                    formStatus.textContent = 'Mensagem enviada com sucesso!';
                    contactForm.reset();
                } else {
                    formStatus.style.color = 'red';
                    formStatus.textContent = 'Erro ao enviar mensagem. Tente novamente.';
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                formStatus.style.color = 'red';
                formStatus.textContent = 'Erro de conexão. Tente novamente.';
            });
            */
        });
    }
});