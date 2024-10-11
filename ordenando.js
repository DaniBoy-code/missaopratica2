// Função para adicionar valor na lista
function add() {
    const valor = document.getElementById('valor').value;
    const lista = document.getElementById('valores');
    
    if (valor) {
        const node = document.createElement('li'); 
        const textnode = document.createTextNode(valor); 
        node.appendChild(textnode); 
        lista.appendChild(node); 
        document.getElementById('valor').value = ''; 
    }
}

// Função para ordenar os valores
function ordenar() {
    const lista = document.getElementById('valores');
    const items = Array.from(lista.children); 
    const valores = items.map(item => parseInt(item.innerHTML)); 
    
    const algoritmo = document.getElementById('algoritmo').value; 
    if (algoritmo === 'bubble') {
        bubbleSort(valores);
    } else if (algoritmo === 'selection') {
        selectionSort(valores);
    } else if (algoritmo === 'quick') {
        quickSort(valores, 0, valores.length - 1);
    }
    
    // Atualizar lista com os valores ordenados
    lista.innerHTML = valores.map(valor => `<li>${valor}</li>`).join('');
}

// Função para embaralhar os valores
function misturar() {
    const lista = document.getElementById('valores');
    const items = Array.from(lista.children);
    const valores = items.map(item => parseInt(item.innerHTML));
    
    shuffle(valores);
    
    // Atualizar lista com os valores embaralhados
    lista.innerHTML = valores.map(valor => `<li>${valor}</li>`).join('');
}

// Funções de ordenação
const swap = (vetor, i, j) => {
    [vetor[i], vetor[j]] = [vetor[j], vetor[i]]; 
};

const bubbleSort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};

const selectionSort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        swap(vetor, i, minIndex);
    }
};

const quickSort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        const pIndex = particionamento(vetor, inicio, fim);
        quickSort(vetor, inicio, pIndex - 1);
        quickSort(vetor, pIndex + 1, fim);
    }
};

const particionamento = (vetor, inicio, fim) => {
    let pivot = vetor[fim];
    let pIndex = inicio;
    for (let i = inicio; i < fim; i++) {
        if (vetor[i] <= pivot) {
            swap(vetor, i, pIndex);
            pIndex++;
        }
    }
    swap(vetor, pIndex, fim);
    return pIndex;
};

// Função para embaralhar
const shuffle = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n; i++) {
        const j = Math.floor(Math.random() * n);
        swap(vetor, i, j);
    }
};
