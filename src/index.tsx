import { useEffect, useState } from 'react'

interface CardDetails {
  publicKey: string
  holder: string
  number: string
  expMonth: string
  expYear: string
  securityCode: string
}

interface EncryptCardResult {
  encryptedCard: string
  errors: string[]
  hasError: boolean
}

interface PagSeguro {
  encryptCard(card: CardDetails): EncryptCardResult
  // Adicione mais métodos e propriedades conforme necessário
}

declare global {
  interface Window {
    PagSeguro: PagSeguro
  }
}

export function usePagSeguro(): PagSeguro | null {
  const [pagseguro, setPagseguro] = useState<PagSeguro | null>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://assets.pagseguro.com.br/checkout-sdk-js/rc/dist/browser/pagseguro.min.js'
    script.async = true
    script.onload = () => {
      const { PagSeguro } = window
      setPagseguro(PagSeguro)
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return pagseguro
}

export function encryptCard(
  pagseguro: PagSeguro,
  card: CardDetails,
): EncryptCardResult {
  const result = pagseguro.encryptCard({
    publicKey: card.publicKey,
    holder: card.holder,
    number: card.number,
    expMonth: card.expMonth,
    expYear: card.expYear,
    securityCode: card.securityCode,
  })

  return result
}
