import { Scale, Briefcase, FileText, Users, Building2, Gavel } from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    title: 'Family Law',
    description: 'Expert guidance in divorce, custody, and family matters with compassionate support.',
    icon: Users,
    features: [
      'Divorce and Separation',
      'Child Custody and Support',
      'Adoption',
      'Prenuptial Agreements',
    ],
  },
  {
    title: 'Corporate Law',
    description: 'Comprehensive legal solutions for businesses of all sizes.',
    icon: Building2,
    features: [
      'Business Formation',
      'Contract Negotiations',
      'Mergers and Acquisitions',
      'Corporate Governance',
    ],
  },
  {
    title: 'Criminal Defense',
    description: 'Strong advocacy and defense strategies in criminal cases.',
    icon: Scale,
    features: [
      'Criminal Defense',
      'DUI Defense',
      'White Collar Crime',
      'Appeals',
    ],
  },
  {
    title: 'Civil Litigation',
    description: 'Skilled representation in civil disputes and litigation matters.',
    icon: Gavel,
    features: [
      'Personal Injury',
      'Property Disputes',
      'Contract Disputes',
      'Employment Law',
    ],
  },
  {
    title: 'Real Estate Law',
    description: 'Expert guidance in all aspects of real estate transactions and disputes.',
    icon: Briefcase,
    features: [
      'Property Transactions',
      'Lease Agreements',
      'Zoning Issues',
      'Property Disputes',
    ],
  },
  {
    title: 'Contract Law',
    description: 'Detailed contract drafting, review, and negotiation services.',
    icon: FileText,
    features: [
      'Contract Drafting',
      'Contract Review',
      'Negotiations',
      'Dispute Resolution',
    ],
  },
];