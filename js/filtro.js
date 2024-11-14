
filterSelection("all")
function filterSelection(c) {

  //Contador de itens no filtro e referencia ao feedback de vazio
  //melhor usarmos Id, ja q vamos ficar removendo e adicionando classe não corremos o risco de remover uma classe pela qual essa variável irá procurar
  let filteredCounter = 0;
  let emptyFeedbackRef = document.getElementById("emptyFeedback");

  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") {
    c = ""
  };

  for (i = 0; i < x.length; i++) {

    w3RemoveClass(x[i], "show");

    if (x[i].className.indexOf(c) > -1) {
      filteredCounter++;  
    	w3AddClass(x[i], "show")
    };
    
  }

  //Sempre adicionar a classe de esconder no feedback de vazio, p/ previnir que ele nao apareça em momentos indesejados
  emptyFeedbackRef.classList.add('hide');

  //Caso o contador de items no filtro seja 0, apareça com o feedback de vazio
  if (filteredCounter === 0) {
    emptyFeedbackRef.classList.remove('hide');
  }

}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Código para adicionar a classe ativa ao botão clicado
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
// Remove a classe ativa do botão atualmente selecionado
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

// Adiciona a classe ativa ao botão clicado
    this.className += " active";

// Envia um evento para o Google Analytics
    gtag('event', 'button_click', {
      'event_category': 'Button',
      'event_label': this.innerText, // Usando o texto do botão como rótulo
      'event_action': 'click'
    });
  });
}

// Código para controle do consentimento de cookies
(() => {
  if (!localStorage.pureJavaScriptCookies) {
    document.querySelector(".box-cookies").classList.remove('hide');
  }

    const acceptCookies = () => {
    document.querySelector(".box-cookies").classList.add('hide');
    localStorage.setItem("pureJavaScriptCookies", "accept");

// Envia um evento para o Google Analytics indicando o consentimento
    gtag('event', 'cookie_consent', {
      'event_category': 'Cookie',
      'event_label': 'Accepted',
      'event_action': 'consent'
    });
  };

  const btnCookies = document.querySelector(".btn-cookies");
  btnCookies.addEventListener('click', acceptCookies);
})();
