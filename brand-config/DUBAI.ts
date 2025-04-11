import { DEFAULT_CONFIG } from '../src/base-config';
import type { Config } from '../src/types';

export const config = {
    data: {
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
    },
    hostname: 'demo',
    version: 1.0,
} as const satisfies Config;
