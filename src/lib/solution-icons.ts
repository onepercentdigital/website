/**
 * Solution Page Icon Registry
 *
 * Centralized icon imports for solution pages.
 * Keys match the `icon` field values in solutions.ts data.
 */

import {
  Award01Icon,
  Book02Icon,
  Building06Icon,
  Calendar01Icon,
  ChartDecreaseIcon,
  ChartIncreaseIcon,
  CheckmarkBadge01Icon,
  Clock01Icon,
  CloudIcon,
  CodeIcon,
  Comment01Icon,
  DeliveryBox01Icon,
  DeliveryTruck01Icon,
  DollarCircleIcon,
  FavouriteIcon,
  File01Icon,
  FingerPrintIcon,
  JusticeScale01Icon,
  Location01Icon,
  Magnet01Icon,
  MapsLocation01Icon,
  PackageSearchIcon,
  RecycleIcon,
  Search01Icon,
  Settings01Icon,
  Shield01Icon,
  ShoppingCart01Icon,
  SignatureIcon,
  SparklesIcon,
  StarIcon,
  Target01Icon,
  Tick02Icon,
  Touch01Icon,
  UserCheck01Icon,
  UserGroupIcon,
  Wrench01Icon,
} from '@hugeicons/core-free-icons';

/**
 * Icon registry for solution pages.
 * Keys match the `icon` field in solutions.ts data.
 */
export const solutionIcons = {
  Award01Icon,
  Book02Icon,
  Building06Icon,
  Calendar01Icon,
  ChartDecreaseIcon,
  ChartIncreaseIcon,
  CheckmarkBadge01Icon,
  Clock01Icon,
  CloudIcon,
  CodeIcon,
  Comment01Icon,
  DeliveryBox01Icon,
  DeliveryTruck01Icon,
  DollarCircleIcon,
  FavouriteIcon,
  File01Icon,
  FingerPrintIcon,
  JusticeScale01Icon,
  Location01Icon,
  Magnet01Icon,
  MapsLocation01Icon,
  PackageSearchIcon,
  RecycleIcon,
  Search01Icon,
  Settings01Icon,
  Shield01Icon,
  ShoppingCart01Icon,
  SignatureIcon,
  SparklesIcon,
  StarIcon,
  Target01Icon,
  Tick02Icon,
  Touch01Icon,
  UserCheck01Icon,
  UserGroupIcon,
  Wrench01Icon,
} as const;

export type SolutionIconKey = keyof typeof solutionIcons;
