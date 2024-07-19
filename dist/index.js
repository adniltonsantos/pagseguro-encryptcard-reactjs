"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptCard = exports.usePagSeguro = void 0;
const react_1 = require("react");
function usePagSeguro() {
    const [pagseguro, setPagseguro] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const script = document.createElement('script');
        script.src =
            'https://assets.pagseguro.com.br/checkout-sdk-js/rc/dist/browser/pagseguro.min.js';
        script.async = true;
        script.onload = () => {
            const { PagSeguro } = window;
            setPagseguro(PagSeguro);
        };
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return pagseguro;
}
exports.usePagSeguro = usePagSeguro;
function encryptCard(pagseguro, card) {
    const result = pagseguro.encryptCard({
        publicKey: card.publicKey,
        holder: card.holder,
        number: card.number,
        expMonth: card.expMonth,
        expYear: card.expYear,
        securityCode: card.securityCode,
    });
    return result;
}
exports.encryptCard = encryptCard;
