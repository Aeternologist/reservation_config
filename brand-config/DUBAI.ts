import { DEFAULT_CONFIG } from './base';
import type { Config } from './types';

export const DUBAI = {
    ...DEFAULT_CONFIG,
    theme: 'dubai',
    tenant: 'Wrf',
    brand_title: 'Reservation Management System',
    defaultLocale: 'en_EN',
    telephonyEnabled: false,
    userAutoHostessSet: true,
    autoGuestId: 18649,
    clientsHasLoyalty: false,
    hasRequests: false,
    hasMultiLanguage: true,
    hasLogo: false,
    currency: 'AED',
    hasStatusFiltersInHallScheme: true,
    requestGrid: true,
    shiftModule: true,
    isPrintAvailable: true,
    vipSign: true,
    dragAndDrop: true,
    newBookingDesign: false,
    sortStatusInDashboard: false,
    bookingWidget: true,
} as const satisfies Config;

export const version = '1.0';
