// Implemente os métodos abaixo:

// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

let functionOne =  function (number, string) {
    result = [];
    for (let i = 0; i < number; i++) {
        result.push(string);
    }
    return result;
};

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

let functionTwo =  function (array) {
    result = [];
    for (let i = array.length; i !== 0; i--) {
        result.push(array[i-1]);
    }
    return result;
};

// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

let functionThree =  function (array) {
    for (let i = array.length; i !== 0; i--) {
        if ([false, undefined, '', 0, null].includes(array[i-1])) {
            array.splice(i-1, 1);
        }
    }
    return array;
};

// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

let functionFour =  function (array) {
    result = {};
    array.forEach(element => {
        result[element[0]] = element[1];
    })
    return result;
};

// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

let functionFive =  function (array, numberOne, numberTwo) {
    let result = [];
    array.forEach(element => {
        if (element != numberOne & element != numberTwo) { result.push(element); }
    })
    return result;
};

// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

let functionSix =  function (array) {
    result = [];
    array.forEach(element => {
        if (!result.includes(element)) {
            result.push(element);
        }
    })
    return result;
};

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

let functionSeven =  function (arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (!(arrayOne[i] === arrayTwo[i])) return false;
    }
    return true;
};

// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

let functionEight =  function (array) {
    let result = [];
    array.forEach(element => {
        if (typeof(element) !== 'object') { result.push(element) }
        else { element.forEach(element => { result.push(element) }) }
    });
    return result; 
};

// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

let functionNine =  function (array, number) {
    let result = [];
    let rest = array.length%number;
    while (array.length != 0) {
        if (array.length != rest) {
            let auxiArray = [];
            for (let i = 0; i < number; i++) {
                auxiArray.push(array[0]);
                array.splice(0, 1);
            }
            result.push(auxiArray);
        }
        else {
            let auxiArray = [];
            for (let i = 0; i < rest; i++) {
                auxiArray.push(array[0]);
                array.splice(0, 1);
            }
            result.push(auxiArray);
        }
    }
    return result; 
};

// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

let functionTen =  function (arrayOne, arrayTwo) {
    let result = [];
    arrayOne.forEach(element => { 
        if (arrayTwo.includes(element)) { result.push(element) };
    })
    return result;
};

// ps: Esses exercícios são de senso comum da comunidade desenvolvimento, utilize o melhor padrão para implementação, criando uma semântica factível.