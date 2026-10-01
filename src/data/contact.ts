// All business contact details live here so the owner can edit them in one place.
// TODO(client): confirm which email address is primary — signage shows
// sibongilemginqi@gmail.com, the flyer shows luloyiso76@gmail.com.
export const contact = {
  name: "Luloyiso Funeral Services",
  address: "Westgate 5C, Matatiele, 4730",
  addressXh: "Westgate 5C, Matatiele, 4730",
  phones: [
    // tel: is dialled in local format, wa.me needs the international 27 prefix.
    { display: "073 948 2146", tel: "0739482146", whatsapp: "27739482146" },
    { display: "079 348 3076", tel: "0793483076", whatsapp: "27793483076" },
  ],
  primaryEmail: "sibongilemginqi@gmail.com",
  alternateEmail: "luloyiso76@gmail.com",
  // Approximate coordinates for Westgate, Matatiele (used for the map embed).
  map: {
    latitude: -30.3446,
    longitude: 28.8083,
  },
} as const;

/** Build a WhatsApp deep link, optionally prefilled with a message. */
export const wa = (number: string, message?: string) =>
  `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

/** Default WhatsApp contact (first listed number). */
export const defaultWhatsapp = contact.phones[0].whatsapp;
