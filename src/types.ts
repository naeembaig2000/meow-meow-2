export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  priceEstimate?: string;
  imageUrl?: string;
}

export interface ClinicHours {
  days: string;
  time: string;
}

export interface ClinicContact {
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  addressShort: string;
  mapsUrl: string;
}

export interface ClinicMetadata {
  practiceName: string;
  dentistName: string;
  dentistTitle: string;
  experienceYears: number;
  locationState: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}
