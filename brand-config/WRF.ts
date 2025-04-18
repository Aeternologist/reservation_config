import { DEFAULT_CONFIG } from '../src/base-config';
import type { Config } from '../src/schema';

export const config = {
    data: {
        ...DEFAULT_CONFIG,
        theme: 'wrf',
        tenant: 'white_rabbit_family',
        brand_title: 'White Rabbit Family',
        telephonyEnabled: false,
        defaultPhoneNumber: '+7',
        userAutoHostessSet: true,
        requestGrid: true,
        vipSign: true,
        autoGuestId: 18649,
        newBookingDesign: true,
        sortStatusInDashboard: false,
        hasMultiLanguage: true,
        dragAndDrop: true,
        grayConfirmedStatusColor: true,
    },
    hostnames: ['wrf', 'wrf-dev', 'wrf-demo'],
    version: '1.0',
} as const satisfies Config;
