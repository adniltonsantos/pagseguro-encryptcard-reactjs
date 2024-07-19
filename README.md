### PagSeguro Hook for React
This hook allows you to easily integrate the PagSeguro card encryption service into your React application.

## Installation

```sh
yarn add pagseguro-encryptcard-reactjs
```
ou 
```sh
npm i pagseguro-encryptcard-reactjs
```

## Usage

First, import the usePagSeguro and encryptCard functions::

```sh
import { usePagSeguro, encryptCard } from './usePagSeguro'
```
Next, in your component, call the usePagSeguro hook to get an instance of the PagSeguro object:

```sh
const pagseguro = usePagSeguro()
```

You can then use this instance to encrypt card details using the encryptCard function:

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
The encryptCard function returns an object with the following properties:

| Object | Properties |
| ------ | ------ |
| encryptedCard | The encrypted card details as a string |
| errors | An array of strings representing any errors that occurred during encryption. |
| hasError | A boolean indicating whether any errors occurred during encryption. |


## Example

```sh
import React from 'react'
import { usePagSeguro, encryptCard } from './usePagSeguro'

function MyComponent() {
  const pagseguro = usePagSeguro()

  const functionEncryCard = async () => {
    if (pagseguro) {
      const cardDetails = {
          publicKey: 'your-public-key',
          holder: 'John Doe',
          number: '4111111111111111',
          expMonth: '12',
          expYear: '2022',
          securityCode: '123'
      }

      const result = await encryptCard(pagseguro, cardDetails)
      console.log('result', result)
    }
  }

  useEffect(() => {
    functionEncryCard()
  }, [pagseguro])

  return <div>My Component</div>
}
```
Please note that the publicKey should be replaced with your actual public key provided by PagSeguro.