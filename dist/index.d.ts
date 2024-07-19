interface CardDetails {
    publicKey: string;
    holder: string;
    number: string;
    expMonth: string;
    expYear: string;
    securityCode: string;
}
interface EncryptCardResult {
    encryptedCard: string;
    errors: string[];
    hasError: boolean;
}
interface PagSeguro {
    encryptCard(card: CardDetails): EncryptCardResult;
}
declare global {
    interface Window {
        PagSeguro: PagSeguro;
    }
}
export declare function usePagSeguro(): PagSeguro | null;
export declare function encryptCard(pagseguro: PagSeguro, card: CardDetails): EncryptCardResult;
export {};
