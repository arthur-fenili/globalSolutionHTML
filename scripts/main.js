function toggleTexto() {
    var elemento = document.querySelector('.solution');
    if (elemento.style.display === 'none' || elemento.style.display === '') {
      elemento.style.display = 'block';
      document.getElementById('magic-button').innerText = 'ESCONDER'
    } else {
      elemento.style.display = 'none';
      document.getElementById('magic-button').innerText = 'REVELAR'
    }
  }
