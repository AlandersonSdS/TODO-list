const inpuTD = document.querySelector('#inpuTD');
const bTDn = document.querySelector('#bTDn');
const lisTD = document.querySelector('#lisTD');
const filTD = document.querySelector('.filTD');

// document.addEventListener('DOMContentLoaded', loadCheck);
document.addEventListener('DOMContentLoaded', loadStorage);
bTDn.addEventListener('click', addAfa);
lisTD.addEventListener('click', concluirExcluir);
filTD.addEventListener('click', filTroDo);

function addAfa(e) {
  e.preventDefault();

  if (inpuTD.value === '') {
    alert('Favor digitar algo válido');
  } else {
    const divTD = document.createElement('div');
    divTD.classList.add('iTDens');
    divTD.appendPare;

    const checkTD = document.createElement('input');
    checkTD.type = 'checkbox';
    checkTD.classList.add('checkTD');
    checkTD.checked = false;
    divTD.appendChild(checkTD);

    const liTD = document.createElement('li');
    liTD.textContent = inpuTD.value;
    liTD.classList.add('liTD');
    divTD.appendChild(liTD);
    saveLocal(inpuTD.value);

    const deleTD = document.createElement('button');
    deleTD.innerHTML = '<i class="fas fa-trash"></i>';
    deleTD.classList.add('deleTD');
    divTD.appendChild(deleTD);

    lisTD.appendChild(divTD);
    inpuTD.value = '';
  }
}

function concluirExcluir(e) {
  const itemTD = e.target;

  if (itemTD.classList[0] === 'deleTD') {
    const td = itemTD.parentElement;
    const removerLi = confirm('Tem certeza que deseja excluir?');
    if (removerLi) {
      deleteLocal(td);
      td.remove();
    }
  }

  if (itemTD.classList[0] === 'checkTD') {
    const todo = itemTD.parentElement;

    todo.classList.toggle('completed');
  }
}

function filTroDo(e) {
  const allTd = lisTD.childNodes;
  allTd.forEach(function (todo) {
    switch (e.target.value) {
      case 'todos':
        todo.style.display = 'block';
        break;
      case 'completo':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'block';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'incompleto':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'block';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}

function saveLocal(item) {
  let todo;
  if (localStorage.getItem('todo') === null) {
    todo = [];
  } else {
    todo = JSON.parse(localStorage.getItem('todo'));
  }
  todo.push(item);
  localStorage.setItem('todo', JSON.stringify(todo));
}

function loadStorage() {
  if (localStorage.getItem('todo') === null) {
    todo = [];
  } else {
    todo = JSON.parse(localStorage.getItem('todo'));
  }
  todo.forEach(function (todo) {
    const divTD = document.createElement('div');
    divTD.classList.add('iTDens');
    divTD.appendPare;

    const checkTD = document.createElement('input');
    checkTD.type = 'checkbox';
    checkTD.classList.add('checkTD');
    divTD.appendChild(checkTD);

    const liTD = document.createElement('li');
    liTD.textContent = todo;
    liTD.classList.add('liTD');
    divTD.appendChild(liTD);

    const deleTD = document.createElement('button');
    deleTD.innerHTML = '<i class="fas fa-trash"></i>';
    deleTD.classList.add('deleTD');
    divTD.appendChild(deleTD);

    lisTD.appendChild(divTD);
  });
}
function deleteLocal(afa) {
  if (localStorage.getItem('todo') === null) {
    todo = [];
  } else {
    todo = JSON.parse(localStorage.getItem('todo'));
  }
  const delAfa = afa.children[0].textContent;
  todo.splice(todo.indexOf(delAfa));
  localStorage.setItem('todo', JSON.stringify(todo));
}
