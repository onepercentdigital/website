/**
 * Industry Icon Mapping
 *
 * Maps solution slugs to their HugeIcons icon components.
 * Shared between the solutions index page and navigation flyout.
 */

import {
  Briefcase01Icon,
  Building06Icon,
  CodeIcon,
  DeliveryBox01Icon,
  DeliveryTruck01Icon,
  Factory01Icon,
  FavouriteIcon,
  Home01Icon,
  JusticeScale01Icon,
  LibraryIcon,
  Restaurant01Icon,
  ShoppingCart01Icon,
  TractorIcon,
} from '@hugeicons/core-free-icons';

export const industryIcons: Record<string, typeof Restaurant01Icon> = {
  hospitality: Restaurant01Icon,
  ecommerce: ShoppingCart01Icon,
  manufacturing: Factory01Icon,
  logistics: DeliveryTruck01Icon,
  automotive: DeliveryBox01Icon,
  construction: Building06Icon,
  agriculture: TractorIcon,
  technology: CodeIcon,
  'health-wellness': FavouriteIcon,
  'finance-insurance': LibraryIcon,
  legal: JusticeScale01Icon,
  'real-estate': Home01Icon,
};

export const fallbackIcon = Briefcase01Icon;
