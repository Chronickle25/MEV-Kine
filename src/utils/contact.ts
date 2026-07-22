export const WHATSAPP_NUMBER = "56936319077";

export const createWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

