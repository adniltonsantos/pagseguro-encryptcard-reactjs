### Hook PagSeguro para React
Este hook permite que você integre facilmente o serviço de criptografia de cartão do PagSeguro em seu aplicativo React.

## Instalação
```sh
yarn add pagseguro-encryptcard-reactjs
```
ou 
```sh
npm i pagseguro-encryptcard-reactjs
```

## Uso
Primeiramente, importe as funções usePagSeguro e encryptCard:

```sh
import { usePagSeguro, encryptCard } from './usePagSeguro'
```
Em seguida, no seu componente, chame o hook usePagSeguro para obter uma instância do objeto PagSeguro:

```sh
const pagseguro = usePagSeguro()
```

Você pode então usar esta instância para criptografar os detalhes do cartão usando a função encryptCard:

```sh
const cardDetails = {
  publicKey: 'sua-chave-publica',
  holder: 'João da Silva',
  number: '4111111111111111',
  expMonth: '12',
  expYear: '2022',
  securityCode: '123'
}
```


```sh
const result = encryptCard(pagseguro, cardDetails)
```
A função encryptCard retorna um objeto com as seguintes propriedades:

| Objeto | Propriedades |
| ------ | ------ |
| encryptedCard | Os detalhes do cartão criptografados como uma string |
| errors | Um array de strings representando quaisquer erros que ocorreram durante a criptografia. |
| hasError | Um booleano indicando se ocorreram erros durante a criptografia. |


## Exemplo

```sh
import React from 'react'
import { usePagSeguro, encryptCard } from './usePagSeguro'

function MeuComponente() {
  const pagseguro = usePagSeguro()

  useEffect(() => {
    if (pagseguro) {
      const cardDetails = {
        publicKey: 'sua-chave-publica',
        holder: 'João da Silva',
        number: '4111111111111111',
        expMonth: '12',
        expYear: '2022',
        securityCode: '123'
      }

      const result = encryptCard(pagseguro, cardDetails)

      console.log(result)
    }
  }, [pagseguro])

  return <div>Meu Componente</div>
}
```
Por favor, note que a publicKey deve ser substituída pela sua chave pública real fornecida pelo PagSeguro.