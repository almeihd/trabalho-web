// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica do Menu Hambúrguer (Celular) ---
    const menuMobile = document.getElementById('menu-mobile');
    const navLinks = document.querySelector('.nav-links');
    const linksInternos = document.querySelectorAll('.nav-links a');

    if (menuMobile) {
        // Abre e fecha o menu ao clicar no botão (☰)
        menuMobile.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Fecha o menu automaticamente quando você clica em algum link (Sobre, Projetos, etc)
        linksInternos.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
    // --- 1. Validação e Envio do Formulário de Contato ---
    const formContato = document.getElementById('form-contato');
    
    if (formContato) {
        formContato.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento padrão da página
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            if (nome === '' || email === '' || mensagem === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Simulação de envio bem-sucedido (Aqui você integrará com Formspree, Web3Forms ou seu backend)
            const btn = formContato.querySelector('.btn');
            const textoOriginal = btn.innerText;
            
            btn.innerText = 'Enviando...';
            btn.style.opacity = '0.7';
            btn.disabled = true;
            
            setTimeout(() => {
                alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);
                formContato.reset();
                btn.innerText = textoOriginal;
                btn.style.opacity = '1';
                btn.disabled = false;
            }, 1500);
        });
    }

    // --- 2. Animação de Surgimento ao Rolar a Página (Scroll Reveal) ---
    const secoes = document.querySelectorAll('section, .card');
    
    const observerOptions = {
        root: null, // Usa o viewport do navegador
        threshold: 0.1, // Dispara quando 10% do elemento aparece
        rootMargin: "0px 0px -50px 0px" // Ajuste para disparar um pouco antes do elemento centralizar
    };
    
    const secaoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Para de observar após animar
            }
        });
    }, observerOptions);
    
    // Configura o estado inicial das seções para a animação
    secoes.forEach(secao => {
        secao.style.opacity = '0';
        secao.style.transform = 'translateY(30px)';
        secao.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        secaoObserver.observe(secao);
    });
});
