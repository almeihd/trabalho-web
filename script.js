// Funcionalidade 1: Rolagem suave para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Calcula a posição considerando a altura do header fixo
            const headerOffset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Funcionalidade 2: Atualizar o ano do copyright no footer automaticamente
const anoAtual = new Date().getFullYear();
const elementoAno = document.getElementById('ano-atual');
if (elementoAno) {
    elementoAno.textContent = anoAtual;
}
// Funcionalidade 3: Validação e simulação de envio do formulário de contato
const formContato = document.getElementById('form-contato');

if (formContato) {
    formContato.addEventListener('submit', function(e) {
        // Evita que a página seja recarregada ao enviar o formulário
        e.preventDefault(); 
        
        // Aqui é onde você integraria com um backend (como Node.js/PHP) 
        // ou um serviço de formulários estáticos (como Formspree ou EmailJS)
        
        alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
        
        // Limpa os campos do formulário após o envio
        this.reset(); 
    });
}