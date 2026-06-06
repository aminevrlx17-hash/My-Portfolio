// Suavizar scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Manipular envio do formulário de contato
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Pegar valores do formulário
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simular envio
        console.log('Formulário enviado:', { name, email, message });
        alert(`Obrigado, ${name}! Sua mensagem foi recebida.`);
        
        // Limpar formulário
        this.reset();
    });
}

// Adicionar efeito de scroll na navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// Efeito de hover nos botões
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function () {
        console.log('Botão clicado!');
    });
});

// Mensagem de boas-vindas no console
console.log('🎉 Bem-vindo ao meu portfólio!');
console.log('📧 Entre em contato: seu-email@exemplo.com');
