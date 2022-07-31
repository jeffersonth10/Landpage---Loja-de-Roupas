// Alterar Cor do cabeçalho de Fundo
const scrollHeader = () => {
    const header = document.getElementById('header')
    //quando a rolagem for maior que 50 de altura da janela de visualização, adicione a classe scroll-header
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)