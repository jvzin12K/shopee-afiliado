// ========== DADOS ==========
let produtos = [
  {id:1, nome:"CABO HDMI 2M", preco:12.00, cat:"gamer", img:"https://down-bs-br.img.susercontent.com/br-11134207-7r98o-mcwfhv697htt90.webp", link:"https://s.shopee.com.br/8phceCH2qi"},
  {id:2, nome:"Suporte Porta Controle Xbox One X / S PS4 PS5 Fone Preto MDF", preco:19.90, cat:"gamer", img:"https://down-zl-br.img.susercontent.com/br-11134207-7r98o-md0iw9420wld02.webp", link:"https://s.shopee.com.br/AADC7qsuTg"},
  {id:3, nome:"Fone P47 Headphone Sem Fio Estéreo Redução de Ruídos Bluetooth 5.0 Universal", preco:18.98, cat:"gamer", img:"https://down-bs-br.img.susercontent.com/sg-11134201-7rav0-mairf8w1nd37d7.webp", link:"https://s.shopee.com.br/4LFPBdp3m1"},
  {id:4, nome:"Controle Camuflado Compatível com PS4 Sem Fio Joystick com Cabo Carregável", preco:52.99, cat:"gamer", img:"https://down-zl-br.img.susercontent.com/br-11134207-7r98o-m6yu2zkhuo9z07.webp", link:"https://s.shopee.com.br/7AZaY5SOOg"},
  {id:5, nome:"Calça Wide Leg Jeans Feminina Marmorizada Cintura Alta 100% Algodão Premium", preco:61.99, cat:"roupa", img:"https://down-bs-br.img.susercontent.com/br-11134207-7r98o-m3rtt2wlkzed62.webp", link:"https://s.shopee.com.br/2qQbRUvOZ9"},
  
  // NOVOS PRODUTOS (LINKS DE AFILIADO)
  {id:6, nome:"Kit 10 ou 4 Cuecas Boxers Masculina de Microfibra", preco:49.90, cat:"roupa", img:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-mbeaha6elrwvf6@resize_w450_nl.webp", link:"https://s.shopee.com.br/4fsHFXno8R"},
  {id:7, nome:"Bermuda Esportiva Masculina Short Para Corridas e Academia", preco:31.99, cat:"roupa", img:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-lyzh5rvlpbgh2d.webp", link:"https://s.shopee.com.br/BPrtJmCDS"},
  {id:8, nome:"Conjunto Jaqueta e Calça Jogger Masculina Inverno Frio Academia Treino Fitness Casual Esportivo Confortável", preco:108.28, cat:"roupa", img:"https://down-br.img.susercontent.com/file/br-11134207-81ztg-ml5s2d08vuh3b4@resize_w450_nl.webp", link:"https://s.shopee.com.br/AUq4CKm3GZ"},
  {id:9, nome:"Kit 3 4 ou 6 Bermudas Masculinas Básicas - DryFit - Malha Leve e Confortável - Pronta En5.trega Origins", preco:85.96, cat:"roupa", img:"https://down-br.img.susercontent.com/file/sg-11134201-824jf-me9czi35gzd15a@resize_w450_nl.webp", link:"https://s.shopee.com.br/3qJAG6FZ2g"},
  {id:10, nome:"Kit 3 Camisetas Básicas Masculina Slim Algodão T01", preco:69.92, cat:"roupas", img:"https://down-br.img.susercontent.com/file/sg-11134201-825af-mg15u52fls0c33@resize_w450_nl.webp", link:"https://s.shopee.com.br/qfYgcHExn"},
  {id:11, nome:"KIT 2 Camisa Gola Polo Alta Qualidade 100% Algodão Camiseta Básica Masculina Diversas Cores", preco:59.80, cat:"roupa", img:"https://down-br.img.susercontent.com/file/br-11134207-81ztx-mkk35oc66qyq6e@resize_w450_nl.webp", link:"https://s.shopee.com.br/50V7eIRIt9"},
  {id:12, nome:"Meia grossa 100% algodão cano alto kit com 06,12 ou 18 pares unissex", preco:41.42, cat:"roupa", img:"https://down-br.img.susercontent.com/file/sg-11134201-824gv-mfom4jrqe9zcba@resize_w450_nl.webp", link:"https://s.shopee.com.br/2VnmfjnDF7"},
  {id:13, nome:"Corta Vento Masculina Impermeável Semi Forrada PRETO Rock Saints", preco:56.42, cat:"roupa", img:"https://down-br.img.susercontent.com/file/br-11134207-81z1k-mgdobxinv6yvbc@resize_w450_nl.webp", link:"https://s.shopee.com.br/4qBhS3qrHO"},
  {id:14, nome:"Calça Jeans Masculina Slim Elastano Atacado", preco:69.90, cat:"roupas", img:"https://down-br.img.susercontent.com/file/br-11134258-820lw-mlc5ivsid3bb6c", link:"https://s.shopee.com.br/1LbpHeuRDG"},
  {id:15, nome:"KIT 2 SHORTS (DRY-FIT) BERMUDA COM ZIPER NO BOLSO", preco:59.99, cat:"roupa", img:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-m17t33yh29hsa6@resize_w450_nl.webp", link:"https://s.shopee.com.br/2Vnmftni6k"},
  {id:16, nome:"Mochila Bolsa Masculina Impermeável Reforçada Promoção Cor Preta", preco:66.05, cat:"mochila", img:"https://down-br.img.susercontent.com/file/br-11134207-81ztc-mke1crgmbksie2@resize_w450_nl.webp", link:"https://s.shopee.com.br/30k3GtNeQZ"},
  {id:17, nome:"Mochila feminina Elegante em Couro Sintetico Impermeável Moda", preco:45.00, cat:"mochila", img:"https://down-br.img.susercontent.com/file/br-11134207-81z1k-me3rwldpvthfa4@resize_w450_nl.webp", link:"https://s.shopee.com.br/8V4zp12Rj3"},
  {id:18, nome:"Mochila Feminina Escolar Grande Nylon Tactel Reforçada Notebook Unisex CHL10101", preco:119.00, cat:"mochilas", img:"https://down-br.img.susercontent.com/file/sg-11134201-825ak-mg9i6fp7zbinb7@resize_w450_nl.webp", link:"https://s.shopee.com.br/5fkoRtSoSZ"},
  {id:19, nome:"Mochila Versatil Pratico para o dia a dia Resistente Unissex Espaçosa Grande Confortavel", preco:69.90, cat:"mochila", img:"https://down-br.img.susercontent.com/file/br-11134201-81ztc-mkb0z7kk3f9fe7@resize_w450_nl.webp", link:"https://s.shopee.com.br/5q4EeE9hY2"},
  {id:20, nome:"Máquina De Cortar Cabelo Para Barba Masculina Designer Aleatório Elétrico Profissional", preco:14.99, cat:"eletronico", img:"https://down-br.img.susercontent.com/file/sg-11134201-7repw-m1udq35ku98d62@resize_w450_nl.webp", link:"https://s.shopee.com.br/3fzk4MFBuP"},
  {id:21, nome:"Depilador Indolor Caneta Sobrancelha Removedor Instantâneo A Pilha", preco:14.99, cat:"eletronico", img:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-lxwgnfs0pu9i52@resize_w450_nl.webp", link:"https://s.shopee.com.br/1gEfgiQSuk"},
  {id:22, nome:"Óleo Essencial De Melaleuca 100% Puro 30ml Contra Micose Acne", preco:29.90, cat:"beleza", img:"https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjtvu6nxdk3m3e@resize_w450_nl.webp", link:"https://s.shopee.com.br/4VYr3xRrdc"},
  {id:23, nome:"Kit 3 Body Splash Delight Very Sexy Roses 200ml Barbours", preco:227.90, cat:"perfume", img:"https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjhapy8ec8hy64@resize_w450_nl.webp", link:"https://s.shopee.com.br/40caT5fkvy"},
  {id:24, nome:"Kit Completo Karseell Máscara 500 g + condicionador 1L + Shampoo 1L + Óleo karseell P 50ml", preco:350.00, cat:"beleza", img:"https://down-br.img.susercontent.com/file/br-11134207-81z1k-mf4s139x9wxx29@resize_w450_nl.webp", link:"https://s.shopee.com.br/3LMtftm1QW"},
  
  // PRODUTOS DE BELEZA
  {id:25, nome:"Sérum Facial Vitamina C Anti-Rugas", preco:35.90, cat:"beleza", img:"https://via.placeholder.com/150?text=Sérum+Facial", link:"https://s.shopee.com.br/exemplo1"},
  {id:26, nome:"Máscara Facial Hidratante Premium", preco:28.00, cat:"beleza", img:"https://via.placeholder.com/150?text=Máscara+Facial", link:"https://s.shopee.com.br/exemplo2"},
  {id:27, nome:"Creme Facial Noturno Regenerador", preco:45.00, cat:"beleza", img:"https://via.placeholder.com/150?text=Creme+Noturno", link:"https://s.shopee.com.br/exemplo3"},
  {id:28, nome:"Paleta de Sombras 12 Cores Matte", preco:32.90, cat:"beleza", img:"https://via.placeholder.com/150?text=Paleta+Sombras", link:"https://s.shopee.com.br/exemplo4"},
  {id:29, nome:"Batom Líquido Matte Longa Duração", preco:22.00, cat:"beleza", img:"https://via.placeholder.com/150?text=Batom+Líquido", link:"https://s.shopee.com.br/exemplo5"},
  
  // PRODUTOS DE PERFUME
  {id:30, nome:"Perfume Feminino Floral 100ml", preco:89.90, cat:"perfume", img:"https://via.placeholder.com/150?text=Perfume+Feminino", link:"https://s.shopee.com.br/exemplo6"},
  {id:31, nome:"Perfume Masculino Amadeirado 100ml", preco:85.00, cat:"perfume", img:"https://via.placeholder.com/150?text=Perfume+Masculino", link:"https://s.shopee.com.br/exemplo7"},
  {id:32, nome:"Colônia Infantil Frutas 75ml", preco:35.00, cat:"perfume", img:"https://via.placeholder.com/150?text=Colônia+Infantil", link:"https://s.shopee.com.br/exemplo8"},
  {id:33, nome:"Perfume Unissex Fresco 100ml", preco:75.00, cat:"perfume", img:"https://via.placeholder.com/150?text=Perfume+Unissex", link:"https://s.shopee.com.br/exemplo9"},
  {id:34, nome:"Spray Corporal Perfumado 200ml", preco:28.90, cat:"perfume", img:"https://via.placeholder.com/150?text=Spray+Corporal", link:"https://s.shopee.com.br/exemplo10"}
];

let favoritos = [];
let carrinho = [];
let filtroAtual = 'all';
let busca = '';

// ========== INICIALIZAÇÃO ==========
function inicializar() {
  // Carregar dados do localStorage
  carregarDados();
  
  // Renderizar tela inicial
  renderizarProdutos();
  
  // Adicionar event listener de busca
  document.getElementById('search').addEventListener('keyup', (e) => {
    busca = e.target.value.toLowerCase();
    renderizarProdutos();
  });
}

// ========== ARMAZENAMENTO ==========
function salvarDados() {
  localStorage.setItem('fav', JSON.stringify(favoritos));
  localStorage.setItem('cart', JSON.stringify(carrinho));
}

function carregarDados() {
  const favSalvos = localStorage.getItem('fav');
  const cartSalvos = localStorage.getItem('cart');
  
  if (favSalvos) {
    try {
      favoritos = JSON.parse(favSalvos);
    } catch (e) {
      favoritos = [];
    }
  }
  
  if (cartSalvos) {
    try {
      carrinho = JSON.parse(cartSalvos);
    } catch (e) {
      carrinho = [];
    }
  }
}

// ========== NAVEGAÇÃO ENTRE TELAS ==========
function mudarTela(telaNova) {
  document.querySelectorAll('.tela-container').forEach(tela => {
    tela.classList.remove('ativa');
  });
  document.getElementById(telaNova).classList.add('ativa');
}

function irParaProdutos() { mudarTela('telaProdutos'); }
function irParaFavoritos() { mudarTela('telaFavoritos'); renderizarFavoritos(); }
function irParaCarrinho() { mudarTela('telaCarrinho'); renderizarCarrinho(); }
function voltarParaProdutos() { irParaProdutos(); }

// ========== RENDERIZAÇÃO DE PRODUTOS ==========
function renderizarProdutos() {
  const grid = document.getElementById('gridProdutos');
  grid.innerHTML = '';
  
  let produtosFiltrados = produtos;
  if (filtroAtual !== 'all') {
    produtosFiltrados = produtosFiltrados.filter(p => p.cat === filtroAtual);
  }
  if (busca) {
    produtosFiltrados = produtosFiltrados.filter(p => p.nome.toLowerCase().includes(busca));
  }
  
  if (produtosFiltrados.length === 0) {
    grid.innerHTML = `<div class="empty-message"><div class="empty-message-icon">🔍</div><p>Nenhum produto encontrado</p></div>`;
    return;
  }
  
  produtosFiltrados.forEach(produto => {
    const isFav = favoritos.some(f => f.id === produto.id);
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${produto.img}" alt="${produto.nome}" onerror="this.src='https://via.placeholder.com/150?text=Sem+Imagem'">
      <div class="card-content">
        <h4>${produto.nome}</h4>
        <div class="card-price">R$ ${produto.preco.toFixed(2)}</div>
        <div class="card-buttons">
          <button class="btn-comprar" onclick="abrirLink('${produto.link}')">Comprar</button>
          <button class="btn-favoritar ${isFav ? 'ativo' : ''}" onclick="toggleFavorito(${produto.id})">
            ${isFav ? '⭐ Favoritado' : '☆ Favoritar'}
          </button>
          <button class="btn-carrinho" onclick="adicionarAoCarrinho(${produto.id})">🛒 Carrinho</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderizarFavoritos() {
  const grid = document.getElementById('gridFavoritos');
  grid.innerHTML = '';
  if (favoritos.length === 0) {
    grid.innerHTML = `<div class="empty-message"><div class="empty-message-icon">⭐</div><p>Você ainda não tem favoritos</p></div>`;
    return;
  }
  favoritos.forEach(produto => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${produto.img}" alt="${produto.nome}" onerror="this.src='https://via.placeholder.com/150?text=Sem+Imagem'">
      <div class="card-content">
        <h4>${produto.nome}</h4>
        <div class="card-price">R$ ${produto.preco.toFixed(2)}</div>
        <div class="card-buttons">
          <button class="btn-comprar" onclick="abrirLink('${produto.link}')">Comprar</button>
          <button class="btn-favoritar ativo" onclick="toggleFavorito(${produto.id})">⭐ Remover</button>
          <button class="btn-carrinho" onclick="adicionarAoCarrinho(${produto.id})">🛒 Carrinho</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderizarCarrinho() {
  const grid = document.getElementById('gridCarrinho');
  const resumo = document.getElementById('resumoCarrinho');
  grid.innerHTML = '';
  resumo.innerHTML = '';
  if (carrinho.length === 0) {
    grid.innerHTML = `<div class="empty-message"><div class="empty-message-icon">🛒</div><p>Seu carrinho está vazio</p></div>`;
    return;
  }
  carrinho.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.nome}" onerror="this.src='https://via.placeholder.com/150?text=Sem+Imagem'">
      <div class="card-content">
        <h4>${item.nome}</h4>
        <div class="card-price">R$ ${item.preco.toFixed(2)}</div>
        <div class="card-qtd">Quantidade: <strong>${item.qtd}</strong></div>
        <div class="card-buttons">
          <button class="btn-comprar" onclick="abrirLink('${item.link}')">Comprar</button>
          <button style="background: #ff9800;" onclick="aumentarQuantidade(${item.id})">➕ Mais</button>
          <button style="background: #ff5722;" onclick="diminuirQuantidade(${item.id})">➖ Menos</button>
          <button class="btn-remover" onclick="removerDoCarrinho(${item.id})">❌ Remover</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  const total = carrinho.reduce((sum, item) => sum + (item.preco * item.qtd), 0);
  resumo.innerHTML = `
    <div class="resumo-carrinho-texto">Total de itens: <strong>${carrinho.length}</strong></div>
    <div class="resumo-carrinho-total">Total: R$ ${total.toFixed(2)}</div>
    <button onclick="finalizarCompra()">Finalizar Compra</button>
  `;
}

function toggleFavorito(id) {
  const produto = produtos.find(p => p.id === id);
  const index = favoritos.findIndex(f => f.id === id);
  if (index === -1) favoritos.push(produto);
  else favoritos.splice(index, 1);
  salvarDados();
  if (document.getElementById('telaProdutos').classList.contains('ativa')) renderizarProdutos();
  else if (document.getElementById('telaFavoritos').classList.contains('ativa')) renderizarFavoritos();
}

function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  const itemCarrinho = carrinho.find(c => c.id === id);
  if (itemCarrinho) itemCarrinho.qtd++;
  else carrinho.push({...produto, qtd: 1});
  salvarDados();
  alert('✅ Produto adicionado ao carrinho!');
}

function aumentarQuantidade(id) {
  const item = carrinho.find(c => c.id === id);
  if (item) { item.qtd++; salvarDados(); renderizarCarrinho(); }
}

function diminuirQuantidade(id) {
  const item = carrinho.find(c => c.id === id);
  if (item) {
    if (item.qtd > 1) item.qtd--;
    else { removerDoCarrinho(id); return; }
    salvarDados(); renderizarCarrinho();
  }
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(c => c.id !== id);
  salvarDados();
  renderizarCarrinho();
}

function filtrarPorCategoria(categoria) {
  filtroAtual = categoria;
  busca = '';
  document.getElementById('search').value = '';
  renderizarProdutos();
}

function abrirLink(link) { window.open(link, '_blank'); }

function finalizarCompra() {
  const total = carrinho.reduce((sum, item) => sum + (item.preco * item.qtd), 0);
  alert(`Compra finalizada!\nTotal: R$ ${total.toFixed(2)}\n\nObrigado por comprar conosco!`);
  carrinho = [];
  salvarDados();
  renderizarCarrinho();
  irParaProdutos();
}

document.addEventListener('DOMContentLoaded', inicializar);
