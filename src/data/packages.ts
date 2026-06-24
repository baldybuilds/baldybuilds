export interface Package {
  name: string;
  tagline: string;
  setup: number | null;
  monthly: number | null;
  poa: boolean;
  highlight: boolean;
  features: string[];
  cta: string;
}

export const packages: Package[] = [
  {
    name: 'Starter',
    tagline: 'Everything you need to get online',
    setup: 600,
    monthly: 35,
    poa: false,
    highlight: false,
    features: [
      'Up to 5 pages',
      'Mobile-first design',
      'Contact form',
      'Domain & hosting included',
      'SSL certificate',
      'Monthly updates (up to 1hr)',
      'Email support',
    ],
    cta: 'Get started',
  },
  {
    name: 'Standard',
    tagline: 'More tools to grow your business',
    setup: 850,
    monthly: 45,
    poa: false,
    highlight: true,
    features: [
      'Everything in Starter',
      'Photo gallery',
      'Booking link integration',
      'Google Reviews widget',
      'Social media links',
      'Priority support',
    ],
    cta: 'Get started',
  },
  {
    name: 'Custom',
    tagline: 'For businesses with specific needs',
    setup: null,
    monthly: null,
    poa: true,
    highlight: false,
    features: [
      'Bespoke design & features',
      'Unlimited pages',
      'Custom integrations',
      'eCommerce ready',
      'Ongoing retainer available',
    ],
    cta: 'Let\'s talk',
  },
];

export const monthlyIncludes = [
  { label: 'Hosting', icon: 'server' },
  { label: 'Domain renewal', icon: 'globe' },
  { label: 'SSL certificate', icon: 'lock' },
  { label: 'Security updates', icon: 'shield' },
  { label: 'Monthly edits (1hr)', icon: 'pencil' },
  { label: 'Email support', icon: 'mail' },
];
