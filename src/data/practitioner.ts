export interface PractitionerProfile {
  name: string;
  jobTitle: string;
  baseArea: string;
  university?: string;
  registrationNumber?: string;
  registrationUrl?: string;
  certifications?: string[];
  yearsExperience?: number;
  sameAs?: string[];
}

// Solo se publican antecedentes confirmados. Completa los campos opcionales
// cuando exista un respaldo verificable.
export const practitioner: PractitionerProfile = {
  name: "Jeremy Mancilla",
  jobTitle: "Kinesiólogo",
  baseArea: "Región Metropolitana de Santiago",
  certifications: ["Certificación en sala IRA"],
};

export const serviceAreas = [
  "Ñuñoa",
  "Providencia",
  "Las Condes",
  "Vitacura",
  "Santiago",
  "El Bosque",
  "La Cisterna",
  "San Bernardo",
  "San Miguel",
  "San Ramón",
  "La Florida",
  "Puente Alto",
];
