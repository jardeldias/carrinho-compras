function adicionar() {
    // recuperar valores nome do produto, quantidade e valor
    let adicionar = document.getElementsByClassName("botao-form botao-adicionar");
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // calcular o preço, subtotal
    let preco = valorUnitario * quantidade;

    // adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
  </section>`

    // atualizar o valor total
    let campoTotal = document.getElementById('valor-total');
    totalGeral = totalGeral + preco;
    campoTotal.textContent = `R$ ${totalGeral}`;

    document.getElementById('quantidade').value = 1;
}

function limpar() {
    let limpar = document.getElementsByClassName("botao-form botao-limpar")
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = 1;
}

let totalGeral;
limpar();