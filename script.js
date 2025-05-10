// Alterna a visibilidade das seções e marca o link ativo
function mostrarSecao(id) {
    // Oculta todas as seções
    document.querySelectorAll('.secao').forEach(secao => {
      secao.classList.remove('ativa');
    });
  
    // Exibe a seção ativa
    document.getElementById(id).classList.add('ativa');
  
    // Atualiza o estilo do menu
    document.querySelectorAll('.menu a').forEach(link => {
      link.classList.remove('ativo');
      if (link.getAttribute('href') === '#' + id) {
        link.classList.add('ativo');
      }
    });
  }
  
  // Ativa a seção correta ao carregar com hash na URL
  window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      mostrarSecao(hash);
    }
  });

// Menu responsivo toggle
function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  menuLinks.classList.toggle('aberto');
}

// Fecha o menu ao clicar em um link (mobile)
document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.menu-links').classList.remove('aberto');
  });
});
