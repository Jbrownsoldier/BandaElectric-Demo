export const company = {
  name: 'Banda Electric',
  legalName: 'Banda Electric',
  shortName: 'Banda',
  siteUrl: 'https://www.bandaelectric.com',
  phoneDisplay: '(403) 330-8292',
  phoneHref: '+14033308292',
  faxDisplay: '(403) 388-9644',
  email: 'info@bandaelectric.com',
  addressLine1: '1220 31 Ave N',
  city: 'Lethbridge',
  region: 'AB',
  postalCode: 'T1H 5J8',
  country: 'CA',
  addressText: '1220 31 Ave N, Lethbridge, AB T1H 5J8',
  serviceAreaShort: 'Lethbridge & Southern Alberta',
  serviceAreaLong:
    'Lethbridge, Coaldale, Coalhurst, Picture Butte, Taber, Fort Macleod, and surrounding Southern Alberta communities',
  yearsExperience: '40+ Years Combined Experience',
  masterElectricians: '2 Master Electricians',
  warranty: 'Five-Year Warranty',
  logo: '/banda-logo.png',
  aboutImage: '/banda-about.jpg',
  ogImage: '/banda-og.jpg',
} as const;

export const companyLinks = {
  phone: `tel:${company.phoneHref}`,
  email: `mailto:${company.email}`,
  maps: 'https://maps.google.com/?q=1220+31+Ave+N+Lethbridge+AB+T1H+5J8',
  website: company.siteUrl,
} as const;

export const serviceAreas = [
  'Lethbridge',
  'Coaldale',
  'Coalhurst',
  'Picture Butte',
  'Taber',
  'Fort Macleod',
  'Southern Alberta',
] as const;
