import { DEFAULT_CONFIG } from '../src/base-config';
import type { Config } from '../src/schema';

export const config = {
    data: {
        ...DEFAULT_CONFIG,
        BRAND: 'DUBAI',
        theme: 'dubai',
        tenant: 'gaia_dubai',
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
    hostnames: ['demo', 'feature', 'fh-demo'],
    version: '1.0',
} as const satisfies Config;
