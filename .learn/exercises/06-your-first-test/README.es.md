# `06` Your first test

## 馃摑 Instrucciones:

1. Dentro del archivo `test.js`, agrega el siguiente c贸digo:

```js
// importar la funci贸n sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra funci贸n sum con 2 n煤meros
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 n煤meros sea 23
    expect(total).toBe(23);
});
```

## 馃挕 Pista:

+ Lee los comentarios en el c贸digo para poder comprender lo que hace el c贸digo. 