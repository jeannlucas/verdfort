// Edite aqui o número e a mensagem padrão do WhatsApp.
// Formato internacional sem '+' e sem espaços. Ex.: '5544999999999'.
export const WHATSAPP_NUMBER = '5544999999999';
export const WHATSAPP_DISPLAY = '(44) 99999-9999';

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vim pelo site e gostaria de um orçamento de hidrosemeadura/terraplanagem.';

export const buildWhatsAppUrl = (message: string = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const SITE = {
  name: 'VERDFORT',
  domain: 'verdfort.com.br',
  url: 'https://verdfort.com.br',
  slogan: 'Da base ao verde, resultados que ficam.',
};
