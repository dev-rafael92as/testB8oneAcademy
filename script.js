const qtdProduto = document.getElementById('setQtdProduto');

function alteraQtdProduto(op) {
    
  if (op == 'up') {
    let num = parseInt(qtdProduto.value);
    qtdProduto.value = num + 1;
  } 

  if (op == 'down') {
    let num = parseInt(qtdProduto.value);
    
        if (num <= 0) {
            qtdProduto.value = 0
        } else {
            qtdProduto.value = num - 1
        }
    }
}

const addToCart = document.querySelector('.c-menu--counter')


function alteraQtdCart() {
    let num = addToCart.innerHTML
    num++
    addToCart.innerHTML = num
}

